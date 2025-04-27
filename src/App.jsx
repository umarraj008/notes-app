import { useEffect } from "react"
import { useState } from "react"
import InfoBar from "./components/InfoBar"

function App() {
  const [text, setText] = useState("")
  const [zoom, setZoom] = useState(100)
  const [fontSize, setFontSize] = useState(16)

  const zoomIncrement = 10
  const maxZoom = 500
  const minZoom = 50
  const defaultFontSize = 16

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === '+' || e.key === '=')) {
        e.preventDefault();
        setZoom((prev) => {
          let newZoom = Math.min(prev + zoomIncrement, maxZoom);
          setFontSize(defaultFontSize * (newZoom / 100));
          return newZoom;
        });
      }

      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        setZoom((prev) => {
          let newZoom = Math.max(prev - zoomIncrement, minZoom);
          setFontSize(defaultFontSize * (newZoom / 100));
          return newZoom;
        })
      }

      if (e.ctrlKey && e.key == "0") {
        e.preventDefault();
        setZoom(100)
        setFontSize(defaultFontSize)
      }
    }

    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();

        if (e.deltaY <0) {
          setZoom((prev) => {
            let newZoom = Math.min(prev + zoomIncrement, maxZoom)
            setFontSize(defaultFontSize * (newZoom / 100))
            return newZoom
          })
        } else if (e.deltaY > 0) {
          setZoom((prev) => {
            let newZoom = Math.max(prev - zoomIncrement, minZoom)
            setFontSize(defaultFontSize * (newZoom / 100))
            return newZoom
          })
        }

      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <textarea className="flex-grow p-4  border-none bg-white outline-none text-black  whitespace-nowrap overflow-x-auto overflow-y-auto resize-none"
        value={text} 
        autoFocus
        onChange={handleTextChange} 
        placeholder="Text goes here.."
        style={{
          fontSize: `${fontSize}px`,
          zoom: `{zoom}%`
        }} />
        <InfoBar className="bg-gray-300 border-t border-solid border-gray-500 p-2" text={text} zoom={zoom}/>
    </div>
  )
}

export default App
