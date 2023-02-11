export function TaskForm() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.title.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <button>Add</button>
      </form>
    </div>
  )
}
