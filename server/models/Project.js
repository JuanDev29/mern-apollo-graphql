import { Schema, model} from 'mongoose'

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    createdAt: String,
    updatedAt: String
  },
  {
    //timestamps: true,
    versionKey: false
  }
)

export default model("Project", projectSchema)