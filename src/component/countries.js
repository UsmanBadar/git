import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Title() {

  const url = "https://jsonplaceholder.typicode.com/posts"
  const [posts, setPosts]=useState([]);

  const getPosts = async () => {
  try {
const userPosts = await axios.get(url)

    setPosts(userPosts.data);
    console.log(userPosts.data);

  } catch (err) {
    console.error(err.message);
  }
};


  useEffect(() => {
     getPosts()
  }, [])

  return (
    <div>
    <ul>
     {posts.map(post=>(
       <li key={post.id}>{post.title}</li>
     ))}
   </ul>
    </div>
  );
}
export default Title;
