import mongoose from 'mongoose'

// mongoose connect method returns a promose so we use async await
const connectDB = (url) => {
  return mongoose.connect(url)
}

export default connectDB
