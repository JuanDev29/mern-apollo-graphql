import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectList() {

  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return <p>Loading</p>
  if (error) return <p>error</p>

  console.log(data.getProjects)

  return (
    <div className='overflow-y-auto h-80 w-full px-5'>
      {
        data.getProjects.map((project) => (
          <ProjectCard key={project._id} project={project}/>
        ))
      }
    </div>
  )
}

