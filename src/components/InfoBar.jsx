import React from 'react'

function InfoBar(props) {
  const {title, text, zoom, saved} = props

  return (
    <div className="bg-gray-300 border-t border-solid border-gray-500">
      <div className="flex justify-between items-center px-2">
        <div className="flex-1">
          <span className="border-r border-gray-500 pr-4">{title}</span>
          {saved ? 
            <span className=" pl-4">Saved</span> 
            : 
            <span className=" pl-4">Unsaved Changes</span>
          }
        </div>
        <div className="flex space-x-4">
          <span className="border-l border-gray-500 pl-4">{text.length} Characters</span>
          <span className="border-l border-gray-500 pl-4">{text.split(" ").filter(word => word.length !== 0).length} Words</span>
          <span className="border-l border-gray-500 pl-4">Zoom {zoom}%</span>
          <span className="border-l border-gray-500 pl-4">txt</span>
          <span className="border-l border-gray-500 pl-4">UTF-8</span>
        </div>
      </div>
    </div>
  )
}

export default InfoBar