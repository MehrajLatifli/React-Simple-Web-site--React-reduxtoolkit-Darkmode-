import React from 'react'

export default function Contact() {
  return (
    <div className="container mt-5">
    <div className="row">
    <form>

    <div className="mb-3">
      <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
      <input type="Title" className="form-control" id="exampleInputTitle1"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputmessage" className="form-label">Email address</label>
      <textarea  className="form-control" id="exampleInputmessage" aria-describedby="messageHelp"/>
      <div id="message" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
    </div>
  )
}
