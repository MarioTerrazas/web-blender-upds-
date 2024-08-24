import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function DropdownMenu({ onScene1Click, onScene2Click, onScene3Click }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const menuElement = menuRef.current;
    const offsetX = e.clientX - menuElement.getBoundingClientRect().left;
    const offsetY = e.clientY - menuElement.getBoundingClientRect().top;

    const handleMouseMove = (moveEvent) => {
      if (isDragging) {
        setPosition({
          x: moveEvent.clientX - offsetX,
          y: moveEvent.clientY - offsetY,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseDown);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="dropdown-menu"
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
    >
      <div className="dropdown-header">Escenas</div>
      <ul>
        <li onClick={onScene1Click}>Rotacion</li>
        <li>Escena 2</li>
        <li>Escena 3</li>
        {/* <li onClick={onScene2Click}>Escena 2</li>
        <li onClick={onScene3Click}>Escena 3</li> */}
        <li>Escena 4</li>
        <li>Escena 5</li>
        <li>Escena 6</li>
        <li>Escena 7</li>
        <li>Escena 8</li>
      </ul>
    </div>
  );
}
