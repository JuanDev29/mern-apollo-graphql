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
    <div>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <button
          disabled={loading}
        >Add</button>
      </form>
    </div>
  )
}
