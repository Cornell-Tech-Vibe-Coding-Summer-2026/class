import { useRef, useMemo, Suspense, useState, useEffect, createContext, useContext } from 'react'
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

// Context for scroll control
const ScrollToContext = createContext(null)

// --- Model Loader ---
function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(url)
  const clonedScene = useMemo(() => scene.clone(), [scene])
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      const x = state.mouse.x * 0.15
      const y = state.mouse.y * 0.08
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotation[1] + x, 0.02)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, rotation[0] - y * 0.2, 0.02)
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
  const ref = useRef()
  const currentScale = useRef(0)
  const currentY = useRef(0)

  useFrame(() => {
    if (!ref.current) return

    const offset = scroll.offset
    const sectionSize = 1 / totalSections

    // Calculate which section is currently active (0, 1, 2, 3, 4)
    const activeSection = Math.round(offset * (totalSections - 1))
    const isActive = index === activeSection

    // Distance from ideal position
    const idealOffset = index / (totalSections - 1)
    const distance = offset - idealOffset

    // Target values
    let targetScale = isActive ? 1 : 0
    let targetY = isActive ? 0 : (distance > 0 ? -5 : 5)

    // Spring interpolation
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.08)
    currentY.current = THREE.MathUtils.lerp(currentY.current, targetY, 0.08)

    ref.current.scale.setScalar(Math.max(0.001, currentScale.current))
    ref.current.position.set(basePosition[0], currentY.current + basePosition[1], basePosition[2])
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

// --- All Models ---
function Models() {
  const totalSections = 5

  return (
    <>
      <FloatingModel index={0} totalSections={totalSections} url="/3D_files/hauke_avatar.glb" scale={2.5} basePosition={[2, -0.5, 0]} />
      <FloatingModel index={1} totalSections={totalSections} url="/3D_files/Large Stack of Paper.glb" scale={20} basePosition={[2.5, 0, 0]} />
      <FloatingModel index={2} totalSections={totalSections} url="/3D_files/Van.glb" scale={0.25} basePosition={[2.5, 0, -1]} rotation={[0, Math.PI / 5, 0]} />
      <FloatingModel index={3} totalSections={totalSections} url="/3D_files/school desk.glb" scale={3} basePosition={[2, 0.5, 0]} />
      <FloatingModel index={4} totalSections={totalSections} url="/3D_files/Statue.glb" scale={2.8} basePosition={[2, 0, 0]} />
    </>
  )
}

// --- Scroll Control Provider ---
function ScrollProvider({ children }) {
  const scroll = useScroll()

  const scrollToSection = (index) => {
    const totalSections = 5
    const targetOffset = index / (totalSections - 1)
    if (scroll.el) {
      const scrollHeight = scroll.el.scrollHeight - scroll.el.clientHeight
      scroll.el.scrollTo({
        top: targetOffset * scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <ScrollToContext.Provider value={scrollToSection}>
      {children}
    </ScrollToContext.Provider>
  )
}

// --- Navigation inside scroll ---
function Navigation() {
  const scrollToSection = useContext(ScrollToContext)

  return (
    <nav className="main-nav">
      <div className="nav-logo">HAUKE_S.</div>
      <div className="nav-links">
        <button onClick={() => scrollToSection(0)}>About</button>
        <button onClick={() => scrollToSection(1)}>Scholar</button>
        <button onClick={() => scrollToSection(2)}>Research</button>
        <button onClick={() => scrollToSection(3)}>Projects</button>
        <button onClick={() => scrollToSection(4)}>Connect</button>
      </div>
    </nav>
  )
}

// --- HTML Content ---
function HtmlContent() {
  return (
    <ScrollProvider>
      {/* Fixed Navigation */}
      <div className="nav-wrapper">
        <Navigation />
      </div>

      {/* Section 1: About */}
      <section className="section section-about">
        <div className="section-content">
          <span className="section-tag">Welcome</span>
          <h1>Hauke Sandhaus</h1>
          <p className="lead">UX Technologist & Ph.D. Candidate at Cornell Tech</p>
          <p>I design and research human-computer interactions that are ethical, inclusive, and delightful. My work spans autonomous vehicles, urban systems, and the ethics of persuasive technology.</p>
          <div className="link-buttons">
            <a href="https://www.instagram.com/haukesandhaus/" target="_blank" rel="noopener noreferrer" className="link-btn instagram">
              <span>📸</span> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Scholar */}
      <section className="section section-scholar">
        <div className="section-content">
          <span className="section-tag">Research</span>
          <h2>Academic Work</h2>
          <p className="lead">Publications, talks, and academic contributions.</p>
          <p>My research has been published in top HCI venues including CHI, DIS, and AutoUI. I explore topics from wizard-of-oz prototyping to the ethics of dark patterns.</p>
          <div className="link-buttons">
            <a href="https://scholar.google.com/citations?user=fZzd8BMAAAAJ" target="_blank" rel="noopener noreferrer" className="link-btn scholar">
              <span>🎓</span> Google Scholar
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Research */}
      <section className="section section-research">
        <div className="section-content">
          <span className="section-tag">Focus Area</span>
          <h2>Autonomous Mobility</h2>
          <p className="lead">The Wizard Cab Project</p>
          <p>I investigate how passengers interact with self-driving vehicles using wizard-of-oz methods to understand trust and the human experience.</p>
          <div className="link-buttons">
            <a href="https://www.autoui.org/" target="_blank" rel="noopener noreferrer" className="link-btn research">
              <span>🚗</span> AutoUI Conference
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Projects */}
      <section className="section section-projects">
        <div className="section-content">
          <span className="section-tag">Portfolio</span>
          <h2>Design & Code</h2>
          <p className="lead">Selected projects and experiments.</p>
          <p>Interactive data visualizations and experimental interfaces at the intersection of design thinking and technical implementation.</p>
          <div className="link-buttons">
            <a href="https://hauke.haus" target="_blank" rel="noopener noreferrer" className="link-btn portfolio">
              <span>🌐</span> Portfolio Website
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Connect */}
      <section className="section section-connect">
        <div className="section-content">
          <span className="section-tag">Let's Talk</span>
          <h2>Connect With Me</h2>
          <p className="lead">Open to collaborations and new ideas.</p>
          <p>Interested in research collaborations, speaking engagements, or just a chat about human-computer interaction? Reach out!</p>
          <div className="link-buttons">
            <a href="https://www.linkedin.com/in/haukesandhaus/" target="_blank" rel="noopener noreferrer" className="link-btn linkedin">
              <span>💼</span> LinkedIn
            </a>
            <a href="mailto:hs786@cornell.edu" className="link-btn email">
              <span>✉️</span> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>Built with React Three Fiber & Vibe Coding ✨</p>
      </footer>
    </ScrollProvider>
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

// --- Scene ---
function Scene() {
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <pointLight position={[-10, 5, -5]} intensity={2} color="#0088ff" />

      <ScrollControls pages={5} damping={0.15}>
        <Suspense fallback={<Loader />}>
          <Models />
          <Scroll html style={{ width: '100%' }}>
            <HtmlContent />
          </Scroll>
        </Suspense>
      </ScrollControls>

      <Environment preset="city" />
    </>
  )
}

function App() {
  return (
    <div className="app-container">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 40 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
