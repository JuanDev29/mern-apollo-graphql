import { useNavigate } from 'react-router-dom'

export function ProjectCard({project}) {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/projects/${project._id}`)}
    className="bg-zinc-800 rounded-lg w-full shadow-lg shadow-slate 
    p-4 mb-2 hover:bg-zinc-700 hover:cursor-pointer"
    >
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  )
}
