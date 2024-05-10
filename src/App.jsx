import React, { useEffect, useState } from 'react'

function App() {
  const [user,setUser] =useState([])
  useEffect(()=>{
 fetch('http://localhost:8242/user')
 .then (respo => (respo.json()))
 .then (data => setUser(data))
  },[])
  return (
    <div>
    <h1> UserList:</h1>
    {
      user.map((item)=>(
        <ul>
          <li>{item.firstname} ,{item.lastname},{item.email}-{item.pass}</li>
        </ul>
      )
    )
    }
      
    </div>
  )
}

export default App
