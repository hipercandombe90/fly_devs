import pkg from "mongoose";
const { Schema, model } = pkg;
import mongoosePaginate from 'mongoose-paginate-v2'

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

taskSchema.plugin(mongoosePaginate)
export default model("Task", taskSchema);
