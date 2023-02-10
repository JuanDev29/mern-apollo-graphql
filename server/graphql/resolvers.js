import Project from '../models/Project.js'
import Task from '../models/Task.js'
import moment from 'moment'

export const resolvers = {
  Query: {
    hello: () => "Hello World",
    getProjects: async () => await Project.find(),
    getTasks: async () => await Task.find(),
    getProject: async (_, { _id }) => await Project.findById(_id),
    getTask: async (_, { _id }) => await Task.findById(_id)
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const createdAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const updatedAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const newProject = new Project({name, description, createdAt, updatedAt})
      const savedProject = await newProject.save()
      return savedProject
    },
    deleteProject: async (_, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete(_id)
      if(!deletedProject) throw new Error("Project not found")
      await Task.deleteMany({projectId: deletedProject._id})
      return deletedProject
    },
    updateProject: async (_, { _id, name, description }) => {
      const updatedAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const updatedProject = await Project.findByIdAndUpdate(
        {_id}, {name, description, updatedAt}, {new: true}
      )
      if(!updatedProject) throw new Error("Project not found")
      return updatedProject
    },
    createTask: async (_, { title, projectId }) => {
      const projectFound = await Project.findById(projectId)
      if(!projectFound) throw new Error("ProjectId does not exists")
      const createdAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const updatedAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const newTask = new Task({title, projectId, createdAt, updatedAt})
      const savedTask = await newTask.save()
      return savedTask

    },
    deleteTask: async (_, { _id }) => {
      const deletedTask = await Task.findByIdAndDelete(_id)
      if(!deletedTask) throw new Error("Task not found")
      return deletedTask
    },
    updateTask: async (_, { _id, title, projectId }) => {
      const updatedAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const updateTask = await Task.findByIdAndUpdate(
        {_id}, {title, projectId, updatedAt}, {new: true}
      )
      if(!updateTask) throw new Error("Task not found")
      return updateTask
    }
  }
}