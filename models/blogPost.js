import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
  ,
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

const BlogPost = mongoose.model('BlogPost') || mongoose.model('BlogPost', blogPostSchema);

export default BlogPost