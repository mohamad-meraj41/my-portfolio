import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavbarComponent from './components/Navbar'
import ProjectList from './pages/ProjectList'
import Dashboard from './pages/Dashboard'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'

const App = () => {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={ <ProjectList /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/project-details/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App