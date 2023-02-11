import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../graphql/projects'
import { TaskList } from '../components/tasks/TaskList'
import { TaskForm } from '../components/tasks/TaskForm'

export function ProjecDetails() {

  const params = useParams()

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: params.id },
    skip: !params.id
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>error</p>

  console.log(data.getProject)

  return (
    <div>
      <h1>{data.getProject.name}</h1>
      <p>{data.getProject.description}</p>
      <button>Delete</button>
      <TaskForm />
      <TaskList tasks={data.getProject.tasks} />
    </div>
  )
}
