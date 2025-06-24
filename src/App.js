import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProblemDetail from './components/ProblemDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/problem/:id" element={<ProblemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
