import Project from '../models/Project.js'
import Task from '../models/Task.js'
import moment from 'moment'

export const resolvers = {
  Query: {
    hello: () => "Hello World",
    getProjects: async () => await Project.find(),
    getTasks: async () => await Task.find(),
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const createdAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const updatedAt = moment(Date().now).format('MMMM Do YYYY, h:mm:ss a')
      const newProject = new Project({name, description, createdAt, updatedAt})
      const savedProject = await newProject.save()
      return savedProject
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
  }
}