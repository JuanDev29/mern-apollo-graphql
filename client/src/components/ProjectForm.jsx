import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects'

export function ProjectForm() {

  const [project, setProject] = useState({
    name: '', description: ''
  })

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS
      },
      "GetProjects"
    ]
  })

  const handleChange = ({ target }) => {
    setProject({...project, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProject({
      variables: {
        name: project.name,
        description: project.description
      }
    })
    console.log(project)
  }

  return (
    <div className='w-2/5'>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"
          placeholder="Write a name"
          onChange={handleChange}
          value={project.name}
          className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block mb-3 w-full"
        />
        <textarea name="description" rows="3" 
          placeholder="Write a description"
          onChange={handleChange}
          value={project.description}
          className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 block mb-3 w-full"
        >
        </textarea>
        <button
          className='bg-indigo-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400'
          disabled={!project.name || !project.description || loading}
        >Save</button>
      </form>
    </div>
  )
}
