import React from 'react'

export default function User(props) {
  const {id , name, email, avatar} = props.data;
  
    return (
    <>
    <h3>{id} | {name} | {email} | <img src={avatar} /> </h3>
    </>
  )
}
