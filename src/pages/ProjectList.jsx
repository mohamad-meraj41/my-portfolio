import React, { useEffect, useState } from 'react';
import axios from 'axios';
import projects from '../data/db';
import { Row, Col } from 'react-bootstrap';
import CardItem from '../components/CardItem';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8000/projects');
        setProjects(response.data);
      } catch (error) {
        setError('Error to retrevied data');
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects();
  }, []);
  
  if(loading) return <h1>Loading....</h1>;
  if(error) return <h1>{error}</h1>;
  
  return (
    <div>
      <h1 style={{color: "#BA8541"}} className="text-center mt-3 fw-bolder fst-italic">PROJECTS</h1>
      <Row>
      {
        projects.map((project, index) => (
          <Col key={index} className="text-center gap-2 col-12 col-sm-12 col-md-6 col-lg-4 mt-1">
            <CardItem project={project} />
          </Col>
        ))
      }
      </Row>
    </div>
  )
}

export default ProjectList