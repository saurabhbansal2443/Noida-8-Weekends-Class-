import React from 'react'
import { useEffect } from 'react'

const Profile = () => {

  useEffect(()=>{
    let count =1 ;
    let id = setInterval(()=>{
      console.log(count++)
    },1000)
  return ()=>{
    clearInterval(id)
  }
  },[])
  return (
    <div>
      This is profile component
    </div>
  )
}

export default Profile
