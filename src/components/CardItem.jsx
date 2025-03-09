import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardItem = ({ project }) => {
  return (
    <Card className="p-2 h-100 mt-4 shadow-lg">
      <Card.Img src={project.image} />
      <Card.Title className="pt-2">{project.title}</Card.Title>
      <Card.Text>Developer: {project.author}</Card.Text>
      
      <h5><Link className="text-decoration-none text-muted" to={`/project-details/${project.id}`} >Read More...</Link></h5>
    </Card>
  )
}

export default CardItem