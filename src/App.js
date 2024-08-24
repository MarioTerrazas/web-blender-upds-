import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Navbar from './Navbar.js';
import DropdownMenu from './DropdownMenu';
import Materiales from './Materiales';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [cameraType, setCameraType] = useState('perspective'); // Tipo de cámara por defecto
  const ref = useRef();
  const cameraRef = useRef();

  const handleScene1Click = () => setAutoRotate((prev) => !prev);

  // Configuración de vistas específicas
  const VistaFrontal = () => {
    ref.current?.setAzimuthalAngle(0);
    ref.current?.setPolarAngle(Math.PI / 2);
    ref.current?.update();
  };

  const VistaLateral = () => {
    ref.current?.setAzimuthalAngle(Math.PI / 2);
    ref.current?.setPolarAngle(Math.PI / 2);
    ref.current?.update();
  };

  const VistaAltura = () => {
    ref.current?.setAzimuthalAngle(0);
    ref.current?.setPolarAngle(0);
    ref.current?.update();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case '1':
          VistaFrontal();
          break;
        case '2':
          VistaLateral();
          break;
        case '3':
          VistaAltura();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta principal que carga el contenido actual de App */}
        <Route
          path="/"
          element={
            <>
              <DropdownMenu 
                onScene1Click={handleScene1Click}
              />
              <Canvas 
                shadows 
                dpr={[1, 2]} 
                camera={{ fov: 50, type: cameraType }} 
                ref={cameraRef}
              >
                <Suspense fallback={null}>
                  <Stage controls={ref} preset="rembrandt" intensity={1} environment={null}>
                    {/* <Model /> */}
                    {/* <Model2 /> */}
                    {/* <Panel />
                    < Monitor/>
                    <Aire/> */}
                  </Stage>
                </Suspense>
                <OrbitControls ref={ref} autoRotate={autoRotate} />
              </Canvas>
            </>
          }
        />

        {/* Ruta para la vista de Materiales */}
        <Route path="/Materiales" element={<Materiales />} />
      </Routes>
    </Router>
  );
}

console.log(useState);
