import { Link, useParams } from 'react-router-dom'
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
      <Link to='/projects'>
        <button className='bg-indigo-500 px-2 text-md py-2 mb-4'>Back</button>
      </Link>
      <div className='bg-zinc-900 mb-2 p-10'>
        <div>
          <h1 className='text-2xl mb-2'>{data.getProject.name}</h1>
          <p className='p-2 mb-2'>{data.getProject.description}</p>
        </div>
        <button className='bg-red-500 px-3 py-2 my-2 w-full'>Delete</button>
      </div>
      <TaskForm />
      <TaskList tasks={data.getProject.tasks} />
    </div>
  )
}
