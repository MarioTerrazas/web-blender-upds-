import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { ChromePicker } from 'react-color'; // Importar el selector de color
import Navbar from './Navbar.js';
import DropdownMenu from './Materiales/DropdownMenu.js';

// Materiales
import { Aire } from './Materiales/Aire.js';
import { Monitor } from './Materiales/Monitor.js';
import { Panel } from './Materiales/Panel.js';
import { Pin } from './Materiales/pin.js';

export default function Materiales() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [cameraType, setCameraType] = useState('perspective');
  const [activeModel, setActiveModel] = useState('Aire');
  const [color, setColor] = useState('#ffffff'); // Estado para el color del Pin
  const ref = useRef();
  const cameraRef = useRef();
  const canvasRef = useRef(); // Inicialización correcta de la referencia

  const handleScene1Click = () => setAutoRotate((prev) => !prev);
  const handleMonitorClick = () => setActiveModel('Monitor');
  const handleAireClick = () => setActiveModel('Aire');
  const handlePanelClick = () => setActiveModel('Panel');
  const handlePinClick = () => setActiveModel('Pin');

  const handleDownloadImageClick = () => {
    if (canvasRef.current) {
      setTimeout(() => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = `${activeModel}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }, 100);
    }
  };
  
  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case '1':
          ref.current?.setAzimuthalAngle(0);
          ref.current?.setPolarAngle(Math.PI / 2);
          ref.current?.update();
          break;
        case '2':
          ref.current?.setAzimuthalAngle(Math.PI / 2);
          ref.current?.setPolarAngle(Math.PI / 2);
          ref.current?.update();
          break;
        case '3':
          ref.current?.setAzimuthalAngle(0);
          ref.current?.setPolarAngle(0);
          ref.current?.update();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <Navbar />
      <DropdownMenu 
        onScene1Click={handleScene1Click}
        onMonitorClick={handleMonitorClick}
        onAireClick={handleAireClick}
        onPanelClick={handlePanelClick}
        onPinClick={handlePinClick}
        onDownloadImageClick={handleDownloadImageClick} 
      />
      {(activeModel === 'Pin' || activeModel === 'Monitor' || activeModel === 'Aire' || activeModel === 'Panel') && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}

      <Canvas 
        ref={canvasRef}
        shadows 
        dpr={[1, 2]} 
        camera={{ fov: 50, type: cameraType }}
      >
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1} environment={null}>
            {activeModel === 'Aire' && <Aire />}
            {/* {activeModel === 'Monitor' && <Monitor />} */}
            {activeModel === 'Monitor' && <Monitor color={color} />} {/* Pasar el color al modelo Pin */}
            {activeModel === 'Panel' && <Panel />}
            {activeModel === 'Pin' && <Pin color={color} />} {/* Pasar el color al modelo Pin */}
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate={autoRotate} />
      </Canvas>
    </>
  );
}
