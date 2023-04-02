import React, { useState } from 'react'

function Form({ posts, setPosts }) {
  const [comment, setComment] = useState('')
  const [email, setEmail] = useState('')

  let URL = 'http://localhost:3000/api/v1'

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      comment
    }
    fetch(`${URL}/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((data) => {
      setPosts([...posts, data])
      setComment("")
      setEmail("")
    })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} >
      <input value={email} type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
      <textarea value={comment} placeholder="Add a Comment" onChange={(event) => setComment(event.target.value)} />
      <div>
        <button type='submit'>Sumbit Post</button>
      </div>
    </form>
  )
}

export default Form
