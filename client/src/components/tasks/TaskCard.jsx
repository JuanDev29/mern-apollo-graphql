export function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.createdAt}</p>
      <button>Delete</button>
      <button>Update</button>
    </div>
  )
}
