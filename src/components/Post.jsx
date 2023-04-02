import React from 'react'

const Post = ({ post, posts, setPosts }) => {

  let URL = 'http://localhost:3000/api/v1'

  const handleDelete = () => {
    fetch(`${URL}/posts/${post.id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      console.log(response)
      setPosts(
        posts.filter((item) => {
          return item.id !== post.id
        })
      )
    })
  }

  return (
    <div>
      <hr />
      <h3>{post.email}</h3>
      <p>{post.comment}</p>
      <div>
        <button onClick={() => handleDelete()}>Delete Post</button>
      </div>
      <hr />
    </div>
  )
}

export default Post
