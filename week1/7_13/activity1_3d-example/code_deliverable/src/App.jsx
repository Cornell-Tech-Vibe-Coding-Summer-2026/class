import { useRef, useMemo, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  GlobalCanvas,
  SmoothScrollbar,
  UseCanvas,
  ScrollScene
} from '@14islands/r3f-scroll-rig'
import { Float, Environment, Center, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import './index.css'

// --- Model Loader ---
function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(url)
  const clonedScene = useMemo(() => scene.clone(), [scene])
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      const x = state.mouse.x * 0.2
      const y = state.mouse.y * 0.1
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

// --- Scroll-synced 3D Component ---
function ScrollModel({ track, url, scale, position, rotation }) {
  return (
    <UseCanvas>
      <ScrollScene track={track}>
        {({ scale: sceneScale, scrollState }) => (
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <Model
              url={url}
              scale={scale}
              position={position}
              rotation={rotation}
            />
          </Float>
        )}
      </ScrollScene>
    </UseCanvas>
  )
}

// --- Section Component ---
function Section({ id, className, tag, title, lead, description, links, modelUrl, modelScale, modelPosition, modelRotation }) {
  const trackRef = useRef()

  return (
    <section id={id} className={`section ${className}`}>
      <div ref={trackRef} className="section-track">
        {/* This div is tracked for 3D positioning */}
      </div>

      <div className="section-content">
        <span className="section-tag">{tag}</span>
        {id === 'about' ? <h1>{title}</h1> : <h2>{title}</h2>}
        <p className="lead">{lead}</p>
        <p>{description}</p>
        <div className="link-buttons">
          {links.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className={`link-btn ${link.style}`}>
              <span>{link.icon}</span> {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* 3D Model synced to this section */}
      <ScrollModel
        track={trackRef}
        url={modelUrl}
        scale={modelScale}
        position={modelPosition}
        rotation={modelRotation}
      />
    </section>
  )
}

// --- Main App ---
function App() {
  const sections = [
    {
      id: 'about',
      className: 'section-about',
      tag: 'Welcome',
      title: 'Hauke Sandhaus',
      lead: 'UX Technologist & Ph.D. Candidate at Cornell Tech',
      description: 'I design and research human-computer interactions that are ethical, inclusive, and delightful. My work spans autonomous vehicles, urban systems, and the ethics of persuasive technology.',
      links: [{ href: 'https://www.instagram.com/haukesandhaus/', icon: '📸', label: 'Instagram', style: 'instagram' }],
      modelUrl: '/3D_files/hauke_avatar.glb',
      modelScale: 2,
      modelPosition: [0, -1, 0],
      modelRotation: [0, 0, 0]
    },
    {
      id: 'scholar',
      className: 'section-scholar',
      tag: 'Research',
      title: 'Academic Work',
      lead: 'Publications, talks, and academic contributions.',
      description: 'My research has been published in top HCI venues including CHI, DIS, and AutoUI. I explore topics ranging from wizard-of-oz prototyping for autonomous vehicles to the ethics of dark patterns in UI design.',
      links: [{ href: 'https://scholar.google.com/citations?user=fZzd8BMAAAAJ', icon: '🎓', label: 'Google Scholar', style: 'scholar' }],
      modelUrl: '/3D_files/Large Stack of Paper.glb',
      modelScale: 15,
      modelPosition: [0, 0, 0],
      modelRotation: [0, 0, 0]
    },
    {
      id: 'research',
      className: 'section-research',
      tag: 'Focus Area',
      title: 'Autonomous Mobility',
      lead: 'The Wizard Cab Project',
      description: 'I investigate how passengers interact with self-driving vehicles. Using wizard-of-oz methods, I simulate future transport scenarios to understand trust, safety, and the human experience of giving up control.',
      links: [{ href: 'https://www.autoui.org/', icon: '🚗', label: 'AutoUI Conference', style: 'research' }],
      modelUrl: '/3D_files/Van.glb',
      modelScale: 0.2,
      modelPosition: [0, -0.5, 0],
      modelRotation: [0, Math.PI / 5, 0]
    },
    {
      id: 'projects',
      className: 'section-projects',
      tag: 'Portfolio',
      title: 'Design & Code',
      lead: 'Selected projects and experiments.',
      description: 'From interactive data visualizations to experimental interfaces, my portfolio showcases the intersection of design thinking and technical implementation.',
      links: [{ href: 'https://hauke.haus', icon: '🌐', label: 'Portfolio Website', style: 'portfolio' }],
      modelUrl: '/3D_files/school desk.glb',
      modelScale: 2.5,
      modelPosition: [0, 0, 0],
      modelRotation: [0, 0, 0]
    },
    {
      id: 'connect',
      className: 'section-connect',
      tag: "Let's Talk",
      title: 'Connect With Me',
      lead: 'Open to collaborations, speaking, and new ideas.',
      description: "Whether you're interested in research collaborations, speaking engagements, or just want to chat about the future of human-computer interaction, I'd love to hear from you.",
      links: [
        { href: 'https://www.linkedin.com/in/haukesandhaus/', icon: '💼', label: 'LinkedIn', style: 'linkedin' },
        { href: 'mailto:hs786@cornell.edu', icon: '✉️', label: 'Email', style: 'email' }
      ],
      modelUrl: '/3D_files/Statue.glb',
      modelScale: 2.3,
      modelPosition: [0, 0, 0],
      modelRotation: [0, 0, 0]
    }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Global 3D Canvas - stays mounted across the page */}
      <GlobalCanvas style={{ zIndex: 0 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <pointLight position={[-10, 5, -5]} intensity={1.5} color="#0088ff" />
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
      </GlobalCanvas>

      {/* Smooth scrollbar for buttery scroll */}
      <SmoothScrollbar />

      {/* HTML Content */}
      <div className="page-content">
        {/* Navigation */}
        <nav className="main-nav">
          <div className="nav-logo">HAUKE_S.</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('scholar')}>Scholar</button>
            <button onClick={() => scrollToSection('research')}>Research</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('connect')}>Connect</button>
          </div>
        </nav>

        {/* Sections */}
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}

        {/* Footer */}
        <footer className="site-footer">
          <p>Built with React Three Fiber & Vibe Coding ✨</p>
        </footer>
      </div>
    </>
  )
}

export default App
