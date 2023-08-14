import { TaskCard } from './TaskCard'

export function TaskList({ tasks }) {
  console.log(tasks)
  return (
    <div>
      {
        tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))
      }
    </div>
  )
}
