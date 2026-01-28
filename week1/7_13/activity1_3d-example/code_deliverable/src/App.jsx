import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
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
      const x = state.mouse.x * 0.25
      const y = state.mouse.y * 0.15
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotation[1] + x, 0.03)
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, rotation[0] - y * 0.3, 0.03)
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

// --- Page Model with Spring-like Visibility ---
function PageModel({ index, totalPages, children, basePosition = [2, 0, 0] }) {
  const scroll = useScroll()
  const ref = useRef()
  const targetScale = useRef(0)
  const targetY = useRef(0)

  useFrame(() => {
    if (!ref.current) return

    const offset = scroll.offset
    const pageSize = 1 / totalPages
    const pageCenter = (index + 0.5) * pageSize
    const distance = offset - pageCenter

    // Strict visibility: only show when very close to center
    const isActive = Math.abs(distance) < pageSize * 0.8

    // Spring-like animation targets
    if (isActive) {
      targetScale.current = 1
      targetY.current = -distance * 8
    } else {
      targetScale.current = 0
      targetY.current = distance > 0 ? -5 : 5
    }

    // Smooth interpolation (spring effect)
    const currentScale = ref.current.scale.x
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale.current, 0.08)
    ref.current.scale.setScalar(Math.max(0.001, newScale))

    const currentY = ref.current.position.y
    ref.current.position.y = THREE.MathUtils.lerp(currentY, targetY.current + basePosition[1], 0.08)
    ref.current.position.x = basePosition[0]
    ref.current.position.z = basePosition[2]

    // Hide completely when scaled down
    ref.current.visible = newScale > 0.01
  })

  return (
    <group ref={ref}>
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.15}>
        {children}
      </Float>
    </group>
  )
}

// --- Loader ---
function Loader() {
  return (
    <Html center>
      <div className="loader">Loading...</div>
    </Html>
  )
}

// --- All 3D Models ---
function Models() {
  const totalPages = 5

  return (
    <>
      {/* About - Avatar */}
      <PageModel index={0} totalPages={totalPages} basePosition={[1.4, -2.4, 0.4]}>
        <Model url="/3D_files/hauke_avatar.glb" scale={2} />
      </PageModel>

      {/* Scholar - Paper Stack */}
      <PageModel index={1} totalPages={totalPages} basePosition={[2, 0, 0]}>
        <Model url="/3D_files/Large Stack of Paper.glb" scale={3} />
      </PageModel>

      {/* Research - Van */}
      <PageModel index={2} totalPages={totalPages} basePosition={[2.5, -0.6, -2.6]}>
        <Model url="/3D_files/Van.glb" scale={0.2} rotation={[0, Math.PI / 5, 0]} />
      </PageModel>

      {/* Projects - Desk */}
      <PageModel index={3} totalPages={totalPages} basePosition={[1.9, 1.7, 0]}>
        <Model url="/3D_files/school desk.glb" scale={2.5} />
      </PageModel>

      {/* Connect - Statue */}
      <PageModel index={4} totalPages={totalPages} basePosition={[1.5, 0.5, 1.9]}>
        <Model url="/3D_files/Statue.glb" scale={2.3} />
      </PageModel>
    </>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} />
      <pointLight position={[-10, 5, -5]} intensity={1.5} color="#0088ff" />

      <ScrollControls pages={5} damping={0.25} snap>
        <Suspense fallback={<Loader />}>
          <Models />

          <Scroll html style={{ width: '100%' }}>
            {/* Navigation */}
            <nav className="main-nav">
              <div className="nav-logo">HAUKE_S.</div>
              <div className="nav-links">
                <a href="#about">About</a>
                <a href="#scholar">Scholar</a>
                <a href="#research">Research</a>
                <a href="#projects">Projects</a>
                <a href="#connect">Connect</a>
              </div>
            </nav>

            {/* Section 1: About */}
            <section id="about" className="section section-about">
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
            <section id="scholar" className="section section-scholar">
              <div className="section-content">
                <span className="section-tag">Research</span>
                <h2>Academic Work</h2>
                <p className="lead">Publications, talks, and academic contributions.</p>
                <p>My research has been published in top HCI venues including CHI, DIS, and AutoUI. I explore topics ranging from wizard-of-oz prototyping for autonomous vehicles to the ethics of dark patterns in UI design.</p>
                <div className="link-buttons">
                  <a href="https://scholar.google.com/citations?user=fZzd8BMAAAAJ" target="_blank" rel="noopener noreferrer" className="link-btn scholar">
                    <span>🎓</span> Google Scholar
                  </a>
                </div>
              </div>
            </section>

            {/* Section 3: Research */}
            <section id="research" className="section section-research">
              <div className="section-content">
                <span className="section-tag">Focus Area</span>
                <h2>Autonomous Mobility</h2>
                <p className="lead">The Wizard Cab Project</p>
                <p>I investigate how passengers interact with self-driving vehicles. Using wizard-of-oz methods, I simulate future transport scenarios to understand trust, safety, and the human experience of giving up control.</p>
                <div className="link-buttons">
                  <a href="https://www.autoui.org/" target="_blank" rel="noopener noreferrer" className="link-btn research">
                    <span>🚗</span> AutoUI Conference
                  </a>
                </div>
              </div>
            </section>

            {/* Section 4: Projects */}
            <section id="projects" className="section section-projects">
              <div className="section-content">
                <span className="section-tag">Portfolio</span>
                <h2>Design & Code</h2>
                <p className="lead">Selected projects and experiments.</p>
                <p>From interactive data visualizations to experimental interfaces, my portfolio showcases the intersection of design thinking and technical implementation.</p>
                <div className="link-buttons">
                  <a href="https://hauke.haus" target="_blank" rel="noopener noreferrer" className="link-btn portfolio">
                    <span>🌐</span> Portfolio Website
                  </a>
                </div>
              </div>
            </section>

            {/* Section 5: Connect */}
            <section id="connect" className="section section-connect">
              <div className="section-content">
                <span className="section-tag">Let's Talk</span>
                <h2>Connect With Me</h2>
                <p className="lead">Open to collaborations, speaking, and new ideas.</p>
                <p>Whether you're interested in research collaborations, speaking engagements, or just want to chat about the future of human-computer interaction, I'd love to hear from you.</p>
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
