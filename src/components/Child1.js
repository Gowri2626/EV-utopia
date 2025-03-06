import React from 'react'


const Child1 = (props) => {
  return (
    <div>
    <h1>{props.name}<br/>
    {props.contact}<br/>
    {props.email}</h1>
    </div>
  )
}

export default Child1