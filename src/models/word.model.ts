import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    translate: {
      type: String,
      required: true
    },
    hint_images: {
      type: Number,
    },
    example: {
      type: String,
    },
    ipa: {
      type: String
    },
  }
)

export default mongoose.model('Word', wordSchema)