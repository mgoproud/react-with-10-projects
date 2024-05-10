import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/mgoproud')
  //   .then((res) => res.json())
  //   .then((res) => setData(res))
  // }, [])

  return (
    <div className='flex flex-wrap justify-center py-5 my-4'>
      <ul className='py-4 font-medium my-0 mx-5'>
        
        <li className='py-2 text-2xl'>{data.name+'\'s'} Github</li>
        <li className='py-2'>Name: {data.name}</li>
        <li className='py-2'>Location: {data.location}</li>
        <li className='py-2'>Company: {data.company}</li>
        <li className='py-2'>Role: {data.bio}</li>
        <li className='py-2 underline text-blue-700'>
          <Link to={data.html_url} target='_blank'>Visit My GH Page</Link>
        </li>
      </ul>
     <div className='flex flex-wrap max-w-md mx-5'>
      <img src={data.avatar_url} alt="logo_github" className='h-3/5 rounded-md' />
     </div>
      
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/mgoproud')
  console.log(response)
  return response.json()
}