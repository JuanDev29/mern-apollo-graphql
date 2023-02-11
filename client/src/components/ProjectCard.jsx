import { useNavigate } from 'react-router-dom'

export function ProjectCard({project}) {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/projects/${project._id}`)}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  )
}
