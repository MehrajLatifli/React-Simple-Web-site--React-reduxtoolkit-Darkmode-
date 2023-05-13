import React from 'react'

export default function Page404() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <div className="container text-center">
          <h1>No found</h1>
          <br />
          <img src={require('../Asserts/img/page404.png')} style={{width:"45vw"}} alt="about"/>
          <br />
          <br />
        
       </div>
      </div>
    </div>
  )
}
