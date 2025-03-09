import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <p>loading...</p>;
  }

  return (
    <div className="mt-5">
      <h1 className="mt-2 p-2 fs-2 text-center fw-bolder fst-italic">
        PROJECT DETAILS
      </h1>
      <div className="mx-5 shadow-lg rounded p-3">
        <img src={project.image} alt={project.title} className="object-fit-cover w-100 rounded shadow-lg" />
        <div className="my-2 p-2">
          <h2>{project.title}</h2>
          <h3>{project.author}</h3>
          <h4>{project.tools}</h4>
          <h5>{project.description}</h5>
        </div>
        <div className="m-3 d-flex flex-row p-3 justify-content-center align-items-center">
          <Link>
            <FaLinkedin className="text-dark h1 mx-3" />
          </Link>
          <Link>
            <FaGithubSquare className="text-dark h1 mx-3" />
          </Link>
        </div>
        
        <div className="d-flex justify-content-center align-items-center">
          <Link className="text-decoration-none text-muted" to="/">
            <h4>Back to Home</h4>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectDetail;
