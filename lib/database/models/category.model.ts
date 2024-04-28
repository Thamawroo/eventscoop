import { Document, model, models, Schema } from "mongoose";

export interface iCategory extends Document {
    _id: string;
    name: string;
}

const CategorySchema = new Schema ({
    name: { type: String, required: true, unique: true },
})

const Category = models.Category || model('category', CategorySchema);

export default Category;