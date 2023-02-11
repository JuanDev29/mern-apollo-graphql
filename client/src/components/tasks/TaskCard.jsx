import { useMutation } from "@apollo/client"
import { DELETE_TASK } from "../../graphql/tasks"
import { AiOutlineDelete } from 'react-icons/ai'

export function TaskCard({ task }) {

  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject'],
  })

  return (
    <div className="bg-zinc-900 px-4 py-2 mb-2">
      <div className="flex justify-between">
        <h3 className="text-lg">{task.title}</h3>
        <button 
          onClick={() => {
            deleteTask({
              variables: {
                id: task._id
              }
            })
          }}
        >
          <AiOutlineDelete />
        </button>
      </div>
      <p className="bg-slate-500 hover:bg-slate-700 p-1 text-sm">{task.createdAt}</p>
    </div>
  )
}
