import React from 'react'

const Project = ({project}) => {
    const {name, description, deployment, repo, img} = project
  return (
    <div className='project' key = {name}>
      <img src={img} alt={name} />
      <div className='projectBody'>
    <h3>
        <a href= {deployment}>{name}</a>
        <a href= {repo} >Github Repo</a>
    </h3>
    <p>{description}</p>
      </div>
    </div>
  )
}

export default Project
