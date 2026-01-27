import { useRef, useMemo, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  OrbitControls,
  Environment,
  Text,
  ContactShadows,
  ScrollControls,
  Scroll,
  useScroll,
  useGLTF,
  Html,
  Center
} from '@react-three/drei'
import { useControls, Leva } from 'leva'
import * as THREE from 'three'
import './index.css'

// --- Custom Shaders ---

const RainbowShader = {
  uniforms: {
    uTime: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    varying vec2 vUv;
    
    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), vUv.y);
    }

    void main() {
      float hue = vUv.x + uTime * 0.2;
      vec3 color = hsv2rgb(vec3(hue, 0.8, 1.0));
      gl_FragColor = vec4(color, 1.0);
    }
  `
}

// --- Component for Loading GLB Models ---

function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], animate = true }) {
  const { scene } = useGLTF(url)
  const clonedScene = useMemo(() => scene.clone(), [scene])
  const ref = useRef()

  useFrame((state) => {
    if (animate && ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.3
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

function ScrollProgress() {
  const scroll = useScroll()
  const [page, setPage] = useState(1)
  useFrame(() => {
    const p = Math.min(6, Math.floor(scroll.offset * 6) + 1)
    if (p !== page) setPage(p)
  })
  return <span>{page}</span>
}

function ExpertiseShape({ index, children, title, description }) {
  const scroll = useScroll()
  const ref = useRef()
  const modelRef = useRef()

  useFrame(() => {
    // Range logic: 0 at start of index, 1 at end of index
    const r = scroll.range(index / 6, 1 / 6)
    // Pass through: moves through the viewport
    ref.current.position.y = (0.5 - r) * 15
    const s = 1 // Constant scale for debugging
    ref.current.scale.setScalar(s)

    if (modelRef.current) {
      modelRef.current.rotation.y = r * Math.PI * 4 // Spin faster
    }
  })

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={modelRef}>
          {children}
        </group>
      </Float>
      <Text
        position={[0, -3, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={4}
        textAlign="center"
      >
        {title}
      </Text>
    </group>
  )
}

function Loader() {
  return (
    <Html center>
      <div className="vibe-badge" style={{ whiteSpace: 'nowrap' }}>Loading 3D Vibe...</div>
    </Html>
  )
}

function Scene() {
  const { avatarScale, avatarPos, avatarVisible } = useControls('Avatar', {
    avatarScale: { value: 4, min: 0.01, max: 10, step: 0.01 },
    avatarPos: { value: [0, -0.5, 0], step: 0.1 },
    avatarVisible: true
  })

  const { vanScale, vanRot, vanVisible } = useControls('Mobility', {
    vanScale: { value: 3.5, min: 0.01, max: 10, step: 0.01 },
    vanRot: { value: [0, Math.PI / 4, 0], step: 0.1 },
    vanVisible: true
  })

  const { libScale, libPos, libVisible } = useControls('NYC', {
    libScale: { value: 10, min: 0.01, max: 50, step: 0.01 },
    libPos: { value: [0, -2, 0], step: 0.1 },
    libVisible: true
  })

  const { flagScale, flagPos, flagVisible, pretzelScale, pretzelPos, pretzelVisible } = useControls('Germany', {
    flagScale: { value: 3.5, min: 0.001, max: 10, step: 0.001 },
    flagPos: { value: [-1.5, 0, 0], step: 0.1 },
    flagVisible: true,
    pretzelScale: { value: 4, min: 0.001, max: 10, step: 0.001 },
    pretzelPos: { value: [1.5, 0, 0], step: 0.1 },
    pretzelVisible: true
  })

  const { statueScale, statuePos, statueVisible } = useControls('Ethics', {
    statueScale: { value: 4.5, min: 0.01, max: 15, step: 0.01 },
    statuePos: { value: [0, -1, 0], step: 0.1 },
    statueVisible: true
  })

  const { deskScale, deskPos, deskVisible, tableScale, tablePos, tableVisible } = useControls('Teaching', {
    deskScale: { value: 3, min: 0.01, max: 10, step: 0.01 },
    deskPos: { value: [-1.5, 0, 0], step: 0.1 },
    deskVisible: true,
    tableScale: { value: 2, min: 0.01, max: 10, step: 0.01 },
    tablePos: { value: [1.5, 0, 0], step: 0.1 },
    tableVisible: true
  })

  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 10]} intensity={4} castShadow />
      <pointLight position={[-10, 5, -5]} intensity={3} color="#0088ff" />
      <spotLight position={[0, 10, 10]} intensity={5} penumbra={1} distance={40} angle={Math.PI / 4} />

      <ScrollControls pages={6} damping={0.2}>
        <Suspense fallback={<Loader />}>
          <Scroll>
            {/* 1. INTRODUCTION: Avatar */}
            <ExpertiseShape index={0} title="Hauke Sandhaus" description="UX Technologist & Ph.D. Candidate">
              {avatarVisible && <Model url="/3D_files/hauke_avatar.glb" scale={avatarScale} position={avatarPos} />}
            </ExpertiseShape>

            {/* 2. MOBILITY: Van */}
            <ExpertiseShape index={1} title="Autonomous Mobility" description="Wizard Cab Research">
              {vanVisible && <Model url="/3D_files/Van.glb" scale={vanScale} rotation={vanRot} />}
            </ExpertiseShape>

            {/* 3. NYC: Lady Liberty */}
            <ExpertiseShape index={2} title="NYC / Cornell Tech" description="Urban Systems & HCI">
              {libVisible && <Model url="/3D_files/Lady Liberty.glb" scale={libScale} position={libPos} />}
            </ExpertiseShape>

            {/* 4. GERMANY: Flag & Pretzel */}
            <ExpertiseShape index={3} title="Culture & Roots" description="Berlin & Beyond">
              <group>
                {flagVisible && <Model url="/3D_files/German Flag.glb" scale={flagScale} position={flagPos} />}
                {pretzelVisible && <Model url="/3D_files/Pretzel.glb" scale={pretzelScale} position={pretzelPos} />}
              </group>
            </ExpertiseShape>

            {/* 5. ETHICS: Statue */}
            <ExpertiseShape index={4} title="Manipulation Ethics" description="UX Manipulation & Autonomy">
              {statueVisible && <Model url="/3D_files/Statue.glb" scale={statueScale} position={statuePos} />}
            </ExpertiseShape>

            {/* 6. TEACHING: Classroom / Desk */}
            <ExpertiseShape index={5} title="Teaching & Vibe Coding" description="Sharing the future">
              <group>
                {deskVisible && <Model url="/3D_files/school desk.glb" scale={deskScale} position={deskPos} />}
                {tableVisible && <Model url="/3D_files/Drafting Table.glb" scale={tableScale} position={tablePos} />}
              </group>
            </ExpertiseShape>
          </Scroll>

          <Scroll html>
            <div className="overlay">
              <div className="header">
                <div className="title-group">
                  <h1 style={{ pointerEvents: 'auto', cursor: 'pointer' }}>HAUKE_S.</h1>
                  <p>Scroll to travel through my 3D expertise</p>
                </div>
                <nav className="nav-links">
                  <a href="https://hauke.haus" target="_blank">Portfolio</a>
                  <a href="https://scholar.google.com/citations?user=fZzd8BMAAAAJ" target="_blank">Scholar</a>
                  <a href="https://haukesand.github.io/assets/pdf/CV_Sandhaus.pdf" target="_blank">CV</a>
                </nav>
              </div>
              <div className="footer">
                <div className="vibe-badge">VIBE CODING 3D SHOWCASE</div>
                <div className="instructions">Wheel down to explore the models</div>
              </div>
            </div>
          </Scroll>
        </Suspense>
      </ScrollControls>

      <Environment preset="city" />
      <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />
    </>
  )
}

function App() {
  console.log("App Mounting...");
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#050505' }}>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
