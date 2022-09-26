import BlogPost from "../models/blogPost";
import connectMongo from "./mongo";

export async function getBlogPosts(req, res){
  try {

    console.log("A");
    const mongo = await connectMongo();
    console.log(mongo)
    const blogPosts = await BlogPost.find({})

    console.log(blogPosts)
    res.status(200).send(blogPosts)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}