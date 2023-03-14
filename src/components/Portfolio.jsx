import React, {useState} from 'react'
import Project from './Project'
import placeholder from "../assets/placeholder.png"

const Portfolio = () => {
const [projects] = useState([
  {
    name: "Project 1",
    description: "placeholder",
    deployment: "github.com",
    repo: "github.com",
    img: placeholder
  },  
  {
    name: "Project 1",
    description: "placeholder",
    deployment: "github.com",
    repo: "github.com",
    img: placeholder
  },  
  {
    name: "Project 1",
    description: "placeholder",
    deployment: "github.com",
    repo: "github.com",
    img: placeholder
  },  
  {
    name: "Project 1",
    description: "placeholder",
    deployment: "github.com",
    repo: "github.com",
    img: placeholder
  },  
  {
    name: "Project 1",
    description: "placeholder",
    deployment: "github.com",
    repo: "github.com",
    img: placeholder
  },  
  {
    name: "Project 1",
    description: "placeholder",
    deployment: "github.com",
    repo: "github.com",
    img: placeholder
  },  
])

  return (
    <div>
      <div>
        {projects.map((project, i) => (
            <Project project = {project} key = {"project" + i} />

        ) 
        )}
      </div>
    </div>
  )
}

export default Portfolio
