import { useRef, useMemo, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  Environment,
  ScrollControls,
  Scroll,
  useScroll,
  useGLTF,
  Html,
  Center,
  MeshDistortMaterial
} from '@react-three/drei'
import * as THREE from 'three'
import './index.css'

// --- Model Loader ---
function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(url)
  const clonedScene = useMemo(() => scene.clone(), [scene])
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      // Mouse-based rotation (works on desktop, touch devices get slight movement)
      const x = state.mouse.x * 0.15
      const y = state.mouse.y * 0.08
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotation[1] + x, 0.1)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, rotation[0] - y * 0.2, 0.1)
    }
  })

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <Center>
        <primitive object={clonedScene} />
      </Center>
    </group>
  )
}

// --- Floating Model - only ONE visible at a time ---
function FloatingModel({ index, totalSections, url, scale, basePosition, rotation = [0, 0, 0] }) {
  const scroll = useScroll()
  const { size } = useThree()
  const ref = useRef()
  const currentScale = useRef(0)
  const currentY = useRef(0)

  useFrame(() => {
    if (!ref.current) return

    const offset = scroll.offset
    const activeSection = Math.round(offset * (totalSections - 1))
    const isActive = index === activeSection
    const idealOffset = index / (totalSections - 1)
    const distance = offset - idealOffset

    // Responsive positioning - synced with CSS 768px breakpoint
    const isMobile = size.width < 768

    let targetScale = isActive ? 1 : 0
    // On mobile, reverse direction so models move same way as cards
    let targetY = isActive ? 0 : (distance > 0 ? (isMobile ? 5 : -5) : (isMobile ? -5 : 5))

    // Model animations (0.08 - smoother speed)
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.08)
    currentY.current = THREE.MathUtils.lerp(currentY.current, targetY, 0.08)


    let xOffset, yOffset, mobileScale
    if (isMobile) {
      // MOBILE: Models at TOP center, smaller
      xOffset = 0
      yOffset = 1 // Position in upper area
      mobileScale = 0.7 // Scale down for mobile
    } else {
      // DESKTOP: Models on right side
      xOffset = basePosition[0]
      yOffset = basePosition[1]
      mobileScale = 1
    }

    ref.current.scale.setScalar(Math.max(0.001, currentScale.current * mobileScale))
    ref.current.position.set(xOffset, currentY.current + yOffset, basePosition[2])
    ref.current.visible = currentScale.current > 0.02
  })

  return (
    <group ref={ref}>
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.15}>
        <Model url={url} scale={scale} rotation={rotation} />
      </Float>
    </group>
  )
}

// --- All Models (6 sections) ---
function Models() {
  const totalSections = 6

  return (
    <>
      {/* About - Avatar */}
      <FloatingModel index={0} totalSections={totalSections} url="/3D_files/hauke_avatar.glb" scale={2.5} basePosition={[2, -0.5, 0]} rotation={[0, Math.PI / -8, 0]} />
      {/* Scholar - Paper Stack */}
      <FloatingModel index={1} totalSections={totalSections} url="/3D_files/Large Stack of Paper.glb" scale={20} basePosition={[1.5, -0.3, -0.5]} />
      {/* Dissertation - Piggy Bank */}
      <FloatingModel index={2} totalSections={totalSections} url="/3D_files/Piggy bank.glb" scale={3} basePosition={[2, 0, 0]} />
      {/* Industry - Van */}
      <FloatingModel index={3} totalSections={totalSections} url="/3D_files/Van.glb" scale={0.25} basePosition={[2.5, 0, -1]} rotation={[0, Math.PI / 5, 0]} />
      {/* Teaching - Desk */}
      <FloatingModel index={4} totalSections={totalSections} url="/3D_files/school desk.glb" scale={3} basePosition={[1.5, 0.0, 0]} />
      {/* Connect - Statue */}
      <FloatingModel index={5} totalSections={totalSections} url="/3D_files/Statue.glb" scale={2.8} basePosition={[2, 0, 0]} />
    </>
  )
}

// --- Auto-Snap Controller with swipe direction detection ---
function AutoSnap() {
  const scroll = useScroll()
  const totalSections = 6
  const lastOffset = useRef(0)
  const scrollStoppedTime = useRef(0)
  const isSnapping = useRef(false)
  const touchStartY = useRef(0)
  const touchStartOffset = useRef(0)

  // Track touch start position
  useEffect(() => {
    if (!scroll.el) return

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
      touchStartOffset.current = scroll.offset
    }

    const handleTouchEnd = (e) => {
      if (isSnapping.current) return

      const touchEndY = e.changedTouches[0].clientY
      const swipeDistance = touchStartY.current - touchEndY // positive = swipe up (next section)
      const currentOffset = scroll.offset
      const currentSection = Math.round(touchStartOffset.current * (totalSections - 1))

      let targetSection = currentSection

      // If swiped more than 30px, go to next/prev section
      if (swipeDistance > 30) {
        targetSection = Math.min(currentSection + 1, totalSections - 1)
      } else if (swipeDistance < -30) {
        targetSection = Math.max(currentSection - 1, 0)
      } else {
        // Small swipe - snap to nearest
        targetSection = Math.round(currentOffset * (totalSections - 1))
      }

      const targetOffset = targetSection / 5.2 // pages (6.2) - 1

      if (Math.abs(currentOffset - targetOffset) > 0.005) {
        isSnapping.current = true
        const scrollHeight = scroll.el.scrollHeight - scroll.el.clientHeight
        scroll.el.scrollTo({
          top: targetOffset * scrollHeight,
          behavior: 'smooth'
        })
        setTimeout(() => {
          isSnapping.current = false
          lastOffset.current = targetOffset
        }, 400)
      }
    }

    scroll.el.addEventListener('touchstart', handleTouchStart, { passive: true })
    scroll.el.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      scroll.el.removeEventListener('touchstart', handleTouchStart)
      scroll.el.removeEventListener('touchend', handleTouchEnd)
    }
  }, [scroll.el, scroll.offset])

  // Desktop: snap after scroll stops
  useFrame((state, delta) => {
    if (!scroll.el || isSnapping.current) return

    const currentOffset = scroll.offset
    const scrollDelta = currentOffset - lastOffset.current
    const isScrolling = Math.abs(scrollDelta) > 0.0003

    if (isScrolling) {
      scrollStoppedTime.current = 0
      lastOffset.current = currentOffset
    } else {
      scrollStoppedTime.current += delta

      // After 150ms of no scrolling, snap to nearest (desktop only)
      if (scrollStoppedTime.current > 0.15) {
        // Don't snap if looking at footer
        if (currentOffset > 0.98) return

        const exactSection = currentOffset * 5.2
        const nearestSection = Math.round(exactSection)
        const targetOffset = nearestSection / 5.2

        if (Math.abs(currentOffset - targetOffset) > 0.008) {
          isSnapping.current = true
          const scrollHeight = scroll.el.scrollHeight - scroll.el.clientHeight
          scroll.el.scrollTo({
            top: targetOffset * scrollHeight,
            behavior: 'smooth'
          })
          setTimeout(() => {
            isSnapping.current = false
            scrollStoppedTime.current = 0
            lastOffset.current = targetOffset
          }, 400)
        }
        scrollStoppedTime.current = 0
      }
    }
  })

  return null
}







// --- HTML Content (without nav - nav is now fixed outside) ---
function HtmlContent() {
  return (
    <>
      {/* Section 1: About */}
      <section className="section section-about">
        <div className="section-content">
          <span className="section-tag">Welcome</span>
          <h1>Hauke Sandhaus</h1>
          <p className="lead">UX Technologist & Ph.D. Candidate at Cornell Tech</p>
          <p>I design and research human-computer interactions that are ethical, inclusive, and delightful. My work spans autonomous vehicles, urban systems, AI-assisted design education, and the ethics of persuasive technology.</p>
          <div className="link-buttons">
            <a href="https://www.instagram.com/hauke.haus/" target="_blank" rel="noopener noreferrer" className="link-btn instagram">
              <span>📸</span> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Scholar */}
      <section className="section section-scholar">
        <div className="section-content">
          <span className="section-tag">Academic Work</span>
          <h2>Publications & Research</h2>
          <p className="lead">Peer-reviewed publications in top HCI venues.</p>
          <p>My research has been published at CHI, DIS, AutoUI, and other prestigious venues. Topics include wizard-of-oz prototyping, dark patterns ethics, and AI-assisted design tools.</p>
          <div className="link-buttons">
            <a href="https://scholar.google.com/citations?user=fZzd8BMAAAAJ" target="_blank" rel="noopener noreferrer" className="link-btn scholar">
              <span>🎓</span> Google Scholar
            </a>
            <a href="https://hauke.haus" target="_blank" rel="noopener noreferrer" className="link-btn portfolio">
              <span>🌐</span> Academic Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Dissertation / Ethical Design */}
      <section className="section section-research">
        <div className="section-content">
          <span className="section-tag">Dissertation Focus</span>
          <h2>Ethical Technology Design</h2>
          <p className="lead">Empowering designers to resist commercial pressures.</p>
          <p>My dissertation explores how to support designers in creating ethical technology despite external market pressures. I develop tools, interventions, and frameworks to promote user-centered and ethically-aware design practices.</p>
          <div className="link-buttons">
            <a href="https://ueeq.framer.website/" target="_blank" rel="noopener noreferrer" className="link-btn research">
              <span>⚖️</span> UEEQ Project
            </a>
            <a href="https://brightpatterns.org" target="_blank" rel="noopener noreferrer" className="link-btn research">
              <span>✨</span> Bright Patterns
            </a>
            <a href="https://www.figma.com/slides/4xI4KHtg6Jnf5zoJ8wMraK/A-Exam-Slides-2024" target="_blank" rel="noopener noreferrer" className="link-btn figma">
              <span>📊</span> Research Overview
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Industry Experience */}
      <section className="section section-industry">
        <div className="section-content">
          <span className="section-tag">Pre-Academia</span>
          <h2>Volkswagen Future Center</h2>
          <p className="lead">Autonomous vehicles & in-car experience design.</p>
          <p>Before academia, I worked at Volkswagen Group Future Center on autonomous vehicle experiences—focusing on AI voice assistance, productivity during autonomous commutes, and designing for visually impaired passengers.</p>
          <div className="link-buttons">
            <a href="https://haukesandhaus.de/" target="_blank" rel="noopener noreferrer" className="link-btn portfolio">
              <span>📁</span> Industry Portfolio
            </a>
            <a href="https://hauke.haus/cv/#publications-1" target="_blank" rel="noopener noreferrer" className="link-btn cv">
              <span>📄</span> Full CV
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Teaching */}
      <section className="section section-teaching">
        <div className="section-content">
          <span className="section-tag">Education</span>
          <h2>Teaching & Workshops</h2>
          <p className="lead">Vibe Coding & AI Co-Design Education.</p>
          <p>I teach courses on AI-assisted design and "vibe coding"—exploring how generative AI tools can augment creative workflows. My pedagogical research explores effective methods for teaching AI co-design skills.</p>
          <div className="link-buttons">
            <a href="https://hauke.haus/teaching/" target="_blank" rel="noopener noreferrer" className="link-btn teaching">
              <span>🎓</span> Teaching Portfolio
            </a>
            <a href="https://dl.acm.org/doi/10.1145/3715336.3735805" target="_blank" rel="noopener noreferrer" className="link-btn scholar">
              <span>📝</span> AI Co-Design Paper
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Connect */}
      <section className="section section-connect">
        <div className="section-content">
          <span className="section-tag">Let's Talk</span>
          <h2>Connect With Me</h2>
          <p className="lead">Open to collaborations and new ideas.</p>
          <p>Interested in research collaborations, speaking engagements, or just a chat about ethical design and human-computer interaction? I'd love to hear from you.</p>
          <div className="link-buttons">
            <a href="https://www.linkedin.com/in/hauke-gregor-wilhelm-sandhaus-62186048/" target="_blank" rel="noopener noreferrer" className="link-btn linkedin">
              <span>💼</span> LinkedIn
            </a>
            <a href="mailto:hgs52@cornell.edu" className="link-btn email">
              <span>✉️</span> Email
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>Built with React Three Fiber & Vibe Coding ✨</p>
        <p className="attribution">3D models CC-BY via <a href="https://poly.pizza" target="_blank" rel="noopener noreferrer">Poly Pizza</a></p>
      </footer>
    </>
  )
}

// --- Loader ---
function Loader() {
  return (
    <Html center>
      <div style={{ color: '#6366f1', fontSize: '1.2rem' }}>Loading...</div>
    </Html>
  )
}

// --- Background Glow in 3D Space (replaces HTML overlays) ---
function BackgroundGlow() {
  const scroll = useScroll()
  const meshRef = useRef()

  const colors = [
    '#0f172a', // About - Slate 900 (very dark)
    '#064e3b', // Scholar - Emerald 900
    '#451a03', // Research - Orange 900
    '#172554', // Industry - Blue 900
    '#4a044e', // Teaching - Fuchsia 900
    '#1e1b4b'  // Connect - Indigo 900
  ]

  useFrame((state) => {
    if (!meshRef.current) return
    const offset = scroll.offset
    const total = colors.length - 1
    const p = offset * total
    const i = Math.floor(p)
    const nextI = Math.min(i + 1, total)
    const ratio = p - i

    // Interpolate color
    const colorA = new THREE.Color(colors[i])
    const colorB = new THREE.Color(colors[nextI])
    meshRef.current.material.color.lerpColors(colorA, colorB, ratio)
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={[25, 15, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial
        transparent
        opacity={0.4}
        speed={1.5}
        distort={0.4}
        radius={1}
      />
    </mesh>
  )
}

// --- Dynamic Lighting based on scroll ---
function DynamicLighting() {
  const scroll = useScroll()
  const lightRef = useRef()

  const colors = [
    '#4f46e5', // About - Indigo (lighter point light)
    '#10b981', // Scholar - Emerald
    '#f59e0b', // Research - Gold
    '#3b82f6', // Industry - Blue
    '#d946ef', // Teaching - Fuchsia
    '#8b5cf6'  // Connect - Violet
  ]

  useFrame(() => {
    if (!lightRef.current) return
    const offset = scroll.offset
    const total = colors.length - 1
    const p = offset * total
    const i = Math.floor(p)
    const nextI = Math.min(i + 1, total)
    const ratio = p - i

    // Interpolate color
    const colorA = new THREE.Color(colors[i])
    const colorB = new THREE.Color(colors[nextI])
    lightRef.current.color.lerpColors(colorA, colorB, ratio)
  })

  return (
    <>
      <pointLight ref={lightRef} position={[-5, 5, 2]} intensity={5} distance={20} />
      <pointLight position={[5, -5, -2]} intensity={1} color="#ffffff" />
    </>
  )
}

// Store scroll ref globally so nav can access it
let globalScrollEl = null

// --- Scene ---
function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />

      <ScrollControls pages={6.2} damping={0.08}>
        <Suspense fallback={<Loader />}>
          <BackgroundGlow />
          <DynamicLighting />
          <Models />
          <AutoSnap />
          <ScrollRefCapture />
          <Scroll html style={{ width: '100%' }}>
            <HtmlContent />
          </Scroll>
        </Suspense>
      </ScrollControls>

      <Environment preset="city" />
    </>
  )
}

// Capture scroll ref for external navigation
function ScrollRefCapture() {
  const scroll = useScroll()
  globalScrollEl = scroll.el
  return null
}

// Fixed navigation outside Canvas
function FixedNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (index) => {
    const targetOffset = index / 5.2 // pages (6.2) - 1
    if (globalScrollEl) {
      const scrollHeight = globalScrollEl.scrollHeight - globalScrollEl.clientHeight
      globalScrollEl.scrollTo({
        top: targetOffset * scrollHeight,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false) // Close menu after navigation
  }

  return (
    <div className="nav-wrapper">
      <nav className="main-nav">
        <div className="nav-logo" onClick={() => scrollToSection(0)} style={{ cursor: 'pointer' }}>hauke.haus</div>

        {/* Hamburger button (mobile only) */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection(1)}>Scholar</button>
          <button onClick={() => scrollToSection(2)}>Research</button>
          <button onClick={() => scrollToSection(3)}>Industry</button>
          <button onClick={() => scrollToSection(4)}>Teaching</button>
          <button onClick={() => scrollToSection(5)}>Connect</button>
        </div>
      </nav>
    </div>
  )
}

// Mobile navigation arrows component
function MobileNavArrows() {
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = 6

  const goToSection = (index) => {
    const clampedIndex = Math.max(0, Math.min(totalSections - 1, index))
    setCurrentSection(clampedIndex)

    const targetOffset = clampedIndex / (totalSections - 1)
    if (globalScrollEl) {
      const scrollHeight = globalScrollEl.scrollHeight - globalScrollEl.clientHeight
      globalScrollEl.scrollTo({
        top: targetOffset * scrollHeight,
        behavior: 'instant'
      })
    }
  }

  const goNext = () => goToSection(currentSection + 1)
  const goPrev = () => goToSection(currentSection - 1)

  // Update current section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (globalScrollEl) {
        const scrollHeight = globalScrollEl.scrollHeight - globalScrollEl.clientHeight
        const offset = globalScrollEl.scrollTop / scrollHeight
        const section = Math.round(offset * (totalSections - 1))
        setCurrentSection(section)
      }
    }

    const interval = setInterval(handleScroll, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mobile-nav-arrows">
      <button
        className="nav-arrow nav-arrow-up"
        onClick={goPrev}
        disabled={currentSection === 0}
        aria-label="Previous section"
      >
        ▲
      </button>
      <div className="section-dots">
        {[...Array(totalSections)].map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentSection ? 'active' : ''}`}
            onClick={() => goToSection(i)}
          />
        ))}
      </div>
      <button
        className="nav-arrow nav-arrow-down"
        onClick={goNext}
        disabled={currentSection === totalSections - 1}
        aria-label="Next section"
      >
        ▼
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <FixedNavigation />
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 40 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
