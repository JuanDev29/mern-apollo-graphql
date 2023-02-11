import { useMutation } from '@apollo/client'
import { CREATE_TASK } from '../../graphql/tasks'
import { useParams } from 'react-router-dom'

export function TaskForm() {

  const params = useParams()
  console.log(params.id)
  
  const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject']
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.title.value)
    if(e.target.title.value !== ''){
      await createTask({
        variables: {
          title: e.target.title.value,
          projectId: params.id
        }
      })
      e.target.reset()
      e.target.title.focus()
    } else {
      console.log("Campo obligatorio")
    }
  }

  return (
    <div className='p-2 my-1'>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" 
        className="bg-zinc-800 text-white rounded-lg 
        shadow-lg p-2 block mb-3 w-full"
        placeholder='Add a new Task' />
        <button
          disabled={loading}
          className='bg-sky-500 px-2 py-1 rounded-md text-sm mb-3 disabled:bg-zinc-400 w-full'
        >Add</button>
      </form>
    </div>
  )
}
