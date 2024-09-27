import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services/Services'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import Team from './pages/Team/Team'
import TeamDetail from './pages/TeamDetail/TeamDetail'
import Project from './pages/Project/Project'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import Blog from './pages/Blog/Blog'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/servicedetail" element={<ServiceDetail />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/teamdetail" element={<TeamDetail />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/projectdetail" element={<ProjectDetail />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blogdetail" element={<BlogDetail />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App