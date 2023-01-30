import React from 'react'

export default function Students(props) {
  const {name, age, roll_no, city} = props.data;


    return ( 
    <>
        {/* <h3>{props.data.name}</h3>
        <h3>{props.data.age}</h3>
        <h3>{props.data.city}</h3>
        <h3>{props.data.roll_no}</h3> */}

        <h3>Name : {name}</h3>
        <h3>Age : {age}</h3>
        <h3>Roll No. : {roll_no}</h3>
        <h3>City : {city}</h3>
        
    
    </>
  )
}
