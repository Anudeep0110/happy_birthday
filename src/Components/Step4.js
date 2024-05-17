import React from 'react'
import { useNavigate } from 'react-router-dom'

const Step4 = () => {

    const navigate = useNavigate()

    React.useEffect(() => {
        setTimeout(() => {
            navigate('/step5')
        }, 5000)
    },[])
  return (
    <div className='min-h-screen gap-y-24 flex flex-col justify-center items-center'>
        <img src='/hearts.webp' alt='Hearts'></img>
        <p className='text-7xl text-red-500'>Teesko Kanna neekey!!</p>
    </div>
  )
}

export default Step4