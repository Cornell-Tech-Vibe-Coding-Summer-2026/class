import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  Environment,
  ScrollControls,
  Scroll,
  useScroll,
  useGLTF,
  Html,
  Center
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
  const { viewport } = useThree()
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

    let targetScale = isActive ? 1 : 0
    let targetY = isActive ? 0 : (distance > 0 ? -5 : 5)

    // Model animations (0.12 - balanced speed)
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.12)
    currentY.current = THREE.MathUtils.lerp(currentY.current, targetY, 0.12)

    // Responsive positioning: move models center on narrow/portrait screens
    const isMobile = viewport.width < 8 // Roughly corresponds to portrait mode
    const xOffset = isMobile ? 0.5 : basePosition[0] // Slightly right of center on mobile

    ref.current.scale.setScalar(Math.max(0.001, currentScale.current))
    ref.current.position.set(xOffset, currentY.current + basePosition[1], basePosition[2])
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

// --- Auto-Snap Controller (in 3D context) ---
function AutoSnap() {
  const scroll = useScroll()
  const totalSections = 6
  const lastOffset = useRef(0)
  const scrollStoppedTime = useRef(0)
  const isSnapping = useRef(false)

  useFrame((state, delta) => {
    if (!scroll.el || isSnapping.current) return

    const currentOffset = scroll.offset
    const isScrolling = Math.abs(currentOffset - lastOffset.current) > 0.0001

    if (isScrolling) {
      // User is actively scrolling, reset timer
      scrollStoppedTime.current = 0
      lastOffset.current = currentOffset
    } else {
      // Scroll has stopped, accumulate time
      scrollStoppedTime.current += delta

      // After 100ms of no scrolling, snap to nearest section
      if (scrollStoppedTime.current > 0.1) {
        const nearestSection = Math.round(currentOffset * (totalSections - 1))
        const targetOffset = nearestSection / (totalSections - 1)

        // Only snap if not already at target
        if (Math.abs(currentOffset - targetOffset) > 0.015) {
          isSnapping.current = true
          const scrollHeight = scroll.el.scrollHeight - scroll.el.clientHeight
          scroll.el.scrollTo({
            top: targetOffset * scrollHeight,
            behavior: 'smooth'
          })
          // Reset after snap animation
          setTimeout(() => {
            isSnapping.current = false
            scrollStoppedTime.current = 0
          }, 600)
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

// Store scroll ref globally so nav can access it
let globalScrollEl = null

// --- Scene ---
function Scene() {
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <pointLight position={[-10, 5, -5]} intensity={2} color="#0088ff" />

      <ScrollControls pages={6} damping={0.1}>
        <Suspense fallback={<Loader />}>
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
  const scrollToSection = (index) => {
    const totalSections = 6
    const targetOffset = index / (totalSections - 1)
    if (globalScrollEl) {
      const scrollHeight = globalScrollEl.scrollHeight - globalScrollEl.clientHeight
      globalScrollEl.scrollTo({
        top: targetOffset * scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="nav-wrapper">
      <nav className="main-nav">
        <div className="nav-logo">hauke.haus</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection(0)}>About</button>
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
