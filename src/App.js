import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Members from './pages/Members';
import Roles from './pages/Roles';
import Structure from './pages/Structure';
import Trash from './pages/Trash';
import Setting from './pages/Setting';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="flex">
            <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/members" element={<Members />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/structure" element={<Structure />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
