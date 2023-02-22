import React from 'react'

function Navbar({props}) {
    const {muslim, isroil}=props
    console.log(isroil);
  return (
    <div>{props.muslim}</div>
  )
}

export default Navbar