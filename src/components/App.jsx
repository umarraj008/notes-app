import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Manager from "./Manager";
import Note from "./Note";

function App() {
  return (
    <Router>
      <Routes>
        {/* Manager Window Route */}
        <Route exact path="/" element={<Manager />} />
        
        {/* Note Window Route */}
        <Route path="/note/:id" element={<Note />} />
      </Routes>
    </Router>
  );
}

export default App;