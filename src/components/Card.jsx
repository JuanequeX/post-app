import React, { useState, useEffect } from 'react'
import Post from './Post'
import Form from './Form'

const  Card = () => {
  const [posts, setPosts] = useState([])
  let URL = 'http://localhost:3000/api/v1'

  useEffect(() => {
    fetch(`${URL}/posts`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      setPosts(data)
    })
  },[])

  return (
    <>
      <div>
        <Form posts={posts} setPosts={setPosts} />
        { posts.map((post, index) => <Post key={index} post={post} posts={posts} setPosts={setPosts} />) }
      </div>
    </>
  )
}

export default Card
