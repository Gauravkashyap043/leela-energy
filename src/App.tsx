// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./layouts/Navbar";
import "./App.css";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
  return (
    <Router>
      {/* Navbar is a layout component */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
