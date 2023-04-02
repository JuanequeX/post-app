import React from 'react'

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.email}</h3>
      <p>{post.comment}</p>
    </div>
  )
}

export default Post
