import mongoose from 'mongoose'

const sentenceShema = new mongoose.Schema(
  {
    level: {
      type: Number,
      required: true
    },
    unit: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    audio_src: {
      type: String,
    }
  }
)

export default mongoose.model('Sentence', sentenceShema)