// src/components/Note.jsx
import React, { useState, useEffect } from 'react';
import InfoBar from './InfoBar';
import { useParams } from 'react-router-dom';

function Note() {
  const { id } = useParams();
  const [note, setNote] = useState({ text: '', id: '', filePath: '' });
  const [text, setText] = useState(note ? note.text : '');
  const [saved, setSaved] = useState(false)
  const [editorSettings, setEditorSettings] = useState({
    fontSize: 16,
    zoom: 100,
    maxZoom: 500,
    minZoom: 50,
    zoomIncrement: 10, 
  });

  // Event listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === '+' || e.key === '=')) {
        e.preventDefault();
        setEditorSettings((prev) => {
          const newZoom = Math.min(prev.zoom + prev.zoomIncrement, prev.maxZoom);
          const newFontSize = prev.defaultFontSize * (newZoom / 100); // Update fontSize based on new zoom
          console.log(newZoom, newFontSize);
          return {
            ...prev,
            zoom: newZoom,
            fontSize: newFontSize,
          };
        });
      }
  
      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        setEditorSettings((prev) => {
          const newZoom = Math.max(prev.zoom - prev.zoomIncrement, prev.minZoom);
          const newFontSize = prev.defaultFontSize * (newZoom / 100); // Update fontSize based on new zoom
          return {
            ...prev,
            zoom: newZoom,
            fontSize: newFontSize,
          };
        });
      }
  
      if (e.ctrlKey && e.key === '0') {
        e.preventDefault();
        setEditorSettings((prev) => ({
          ...prev,
          zoom: 100,
          fontSize: prev.defaultFontSize,
        }));
      }
    };
  
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
  
        if (e.deltaY < 0) {
          setEditorSettings((prev) => {
            const newZoom = Math.min(prev.zoom + prev.zoomIncrement, prev.maxZoom);
            const newFontSize = prev.defaultFontSize * (newZoom / 100);
            return {
              ...prev,
              zoom: newZoom,
              fontSize: newFontSize,
            };
          });
        } else if (e.deltaY > 0) {
          setEditorSettings((prev) => {
            const newZoom = Math.max(prev.zoom - prev.zoomIncrement, prev.minZoom);
            const newFontSize = prev.defaultFontSize * (newZoom / 100);
            return {
              ...prev,
              zoom: newZoom,
              fontSize: newFontSize,
            };
          });
        }
      }
    };
  
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handle text changes
  const handleTextChange = (e) => {
    const updatedText = e.target.value;
    setText(updatedText);
    setSaved(false);
  };

  // // Render loading
  if (!id) {
    return (
      <div className='flex justify-center h-screen'>
        <span className='loader my-auto'></span>
      </div>
    )
  }

  // Render editor
  return (
    <div className="flex flex-col h-screen">
      <textarea
        className="flex-grow p-4 border-none bg-white outline-none text-black whitespace-nowrap overflow-x-auto overflow-y-auto resize-none"
        value={text}
        autoFocus
        onChange={handleTextChange}
        placeholder="Text goes here.."
        rows="10"
        style={{
          fontSize: `${editorSettings.fontSize}px`,
          zoom: `${editorSettings.zoom}%`,
        }}
      />
      <InfoBar 
        className="bg-gray-300 border-t border-solid border-gray-500 p-2" 
        title={note.title} 
        text={text} 
        zoom={editorSettings.zoom} 
        saved={saved}
      />
    </div>
  );
}

export default Note;