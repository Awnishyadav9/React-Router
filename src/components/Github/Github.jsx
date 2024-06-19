import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {
 const data = useLoaderData() 


    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Awnishyadav9')
    //   .then(response => response.json())
    //   .then(data=> {
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <>
    <div className='text-center bg-gray-700 p-4 font-bold text-white'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" width={250}  className='rounded-3xl'/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Awnishyadav9')
    return response.json()
}
