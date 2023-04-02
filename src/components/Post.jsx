import React, { useState } from 'react'

const Post = ({ post, posts, setPosts }) => {
  const [updatePost, setUpdatePost] = useState(post)
  const [isUpdating, setIsUpdating] = useState(false)

  let URL = 'http://localhost:3000/api/v1'

  const handleDelete = () => {
    fetch(`${URL}/posts/${post.id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if(response.status === 204) {
          setPosts(
          posts.filter((item) => {
            return item.id !== post.id
          })
        )
      }
    })
  }

  const handleUpdate = () => {
    setIsUpdating(!isUpdating)
    setUpdatePost(post)
  }

  const submitHandleUpdate = (e) => {
    e.preventDefault()
    const body = {
      email: updatePost.email,
      comment: updatePost.comment
    }
    fetch(`${URL}/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }).then((response) => response.json())
    .then((data) => {
      setIsUpdating(!isUpdating)
      const copyPosts = posts
      const postToUpdate = copyPosts.find((post) => post.id === data.id)
      postToUpdate.email = data.email
      postToUpdate.comment = data.comment
      setPosts(copyPosts)
    })

  }

  return (
    <>
      { isUpdating && (
        <div>
          <hr />
          <form onSubmit={(e) => handleUpdate(e)} >
            <input value={updatePost.email} type="email" placeholder="Email" onChange={(event) => setUpdatePost({ ...updatePost, email: event.target.value})} />
            <textarea value={updatePost.comment} placeholder="Add a Comment" onChange={(event) => setUpdatePost({ ...updatePost, comment: event.target.value})} />
            <div>
              <button onClick={() => handleUpdate()}>Cancel Edit</button>
              <button onClick={(e) => submitHandleUpdate(e)}>Save Post</button>
             </div>
          </form>
          <hr />
        </div>
      )}
      { !isUpdating && (
        <div>
          <hr />
          <h3>{post.email}</h3>
          <p>{post.comment}</p>
          <div>
            <button onClick={() => handleDelete()}>Delete Post</button>
            <button onClick={() => handleUpdate()}>Edit Post</button>
          </div>
          <hr />
        </div>
      )}
    </>
  )
}

export default Post
