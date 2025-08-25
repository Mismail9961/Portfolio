
import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  uses: { type: [String], required: true },
  link: { type: String, required: true },
});


const productModel =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default productModel;