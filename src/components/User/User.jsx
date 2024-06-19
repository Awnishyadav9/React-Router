import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const {userid} = useParams()
  return (
    <div className='text-center font-bold text-3xl bg-gray-600 p-4 text-white'>User : {userid}</div>
  )
}

export default User
