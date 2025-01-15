import { Document, model, models, Schema } from "mongoose";

export interface ImageI extends Document {
  title: string; // Title of the image
  transformationType: string; // Type of transformation applied to the image
  publicId: string; // Public identifier for the image (e.g., Cloudinary ID)
  secureUrl: string; // Secure URL for the image
  width?: number; // Width of the image in pixels (optional)
  height?: number; // Height of the image in pixels (optional)
  config?: Record<string, any>; // Configuration object for additional settings
  transformationUrl?: URL; // URL representing the transformation applied (optional)
  aspectRatio?: string; // Aspect ratio of the image (optional)
  color?: string; // Dominant color of the image (optional)
  prompt?: string; // Description or prompt for generating the image (optional)
  author?: { _id: string; firstName: string; lastName: string }; // Reference to the author's ID (optional)
  createdAt?: Date; // Date when the image was created
  updatedAt?: Date; // Date when the image was last updated
}

const ImageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
  },
  height: { type: Number },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: URL,
  },
  aspectRatio: {
    type: String,
  },
  color: {
    type: String,
  },
  prompt: {
    type: String,
  },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
