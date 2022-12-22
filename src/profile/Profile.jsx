import React from 'react'

function Profile(props) {



  return (
    <div>
        <h1>Mon nom est : {props.fullName}</h1>
        <div>{props.children}</div>
        <button onClick={() => props.handleName(props.fullName)}>Show alert</button>
    </div>
  )
}

export default Profile