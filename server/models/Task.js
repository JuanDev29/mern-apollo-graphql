import { Schema, model } from 'mongoose'

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Project"
    },
    createdAt: String,
    updatedAt: String
  },
  {
    //timestamps: true,
    versionKey: false
  }
)

export default model("Task", taskSchema)