import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-2 bg-dark mt-5 rounded">
      <div className="mt-2"><p style={{color: "#BA8541"}}>CopyRight || 2024 </p></div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Link className="text-decoration-none">
          <FaLinkedin style={{color: "#BA8541"}} className="h1 mx-3" />
        </Link>
        <Link to="https://github.com/mohamad-meraj41" className="text-decoration-none">
          <FaGithubSquare style={{color: "#BA8541"}} className="h1 mx-3" />
        </Link>
      </div>
    </div>
  )
}

export default Footer