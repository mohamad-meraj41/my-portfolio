import React, { useState } from 'react'
import DigitClock from '../components/DigitClock'
import Inputs from '../components/Inputs'
import Textarea from '../components/Textarea'
import { Button } from 'react-bootstrap'
import projects from '../data/db'
import axios from 'axios'

const Dashboard = () => {
  const [project, setProject] = useState({
    title: "",
    date: "",
    author: "",
    tools: "",
    description: "",
    image: ""
  })
  const changeProjectHandler = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const changeTextareaHandler = (e) => {
    setProject((prevState) => ({
      ...prevState,
      description: e.target.value
    }))
  }
  
  const createProjectHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/projects', project);
      alert('Added project successfully!');
      setProject({
        id: 5,
      image: project.image,
      title: project.title,
      date: project.date,
      author: project.author,
      description: project.description,
      tools: project.tools
      })
    } catch (error) {
      console.error("Error to sending data", error)
    }
  }
  
  return (
    <div className="mt-3">
      <h1 className="text-center fw-bolder fst-italic">
        ADD NEW PROJECT
      </h1>
      <div className="article-bg d-flex flex-column w-full min-h-full rounded p-3 shadow-lg mt-3">
        <DigitClock />
        
        <Inputs label="ID" name="id" changeHandler={changeProjectHandler} type="text" />
        
        <Inputs label="TITLE" name="title" changeHandler={changeProjectHandler} type="text" />
        <Inputs className="d-flex justify-content-end" label="DATE" name="date" changeHandler={changeProjectHandler} type="text" />
        <Inputs label="DEVELOPER" name="author" changeHandler={changeProjectHandler} />
        
        <Inputs label="TOOLS" name="tools" changeHandler={changeProjectHandler} type="text" />
        
        <Inputs label="IMAGE URL" name="image" changeHandler={changeProjectHandler} type="text" />
        
        <Textarea label="DESCRIPTION" changeHandler={changeTextareaHandler} />
        
        <div className="d-flex justify-content-start align-items-center p-3">
          <Button onClick={createProjectHandler} variant="btn btn-sm btn-outline-secondary fs-3">
            CREATE NEW PROJECT
          </Button>
        </div>
        
      </div>
      
      
      
    </div>
  )
}

export default Dashboard