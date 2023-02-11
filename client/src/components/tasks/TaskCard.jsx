import { useMutation } from "@apollo/client"
import { DELETE_TASK } from "../../graphql/tasks"

export function TaskCard({ task }) {

  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject'],
  })

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.createdAt}</p>
      <button 
        onClick={() => {
          deleteTask({
            variables: {
              id: task._id
            }
          })
        }}
      >Delete</button>
    </div>
  )
}
