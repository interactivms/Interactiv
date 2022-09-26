import React, {useEffect, useState} from "react";
import PageLayout from '../components/layouts/pageLayout'
export default function Blog() {

  const getPosts = async() => {
    let res = await getBlogPosts();
    return res
  } 
  useEffect(() => {
      console.log(getPosts())
  },[])


  return <div className="row mx-0 viewh-100 bg-dark"></div>;
}

Blog.layout = PageLayout;
