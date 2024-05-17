import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Step2 = () => {
    const navigate = useNavigate()
  return (
    <motion.div className='min-h-screen bg-pink-200 flex justify-center items-center uppercase text-2xl'>
        <motion.div className='flex flex-col gap-y-5 py-10 items-center'>
          <motion.p 
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{delay:0.5,duration:1}}
          exit={{scale:0}}
          className='uppercase text-5xl'>Certificate of Excellence</motion.p>
          <motion.a 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1,duration:2}}
          exit={{opacity:0}}
          href='/step1.png' className='w-1/2' download><img src='/step1.png' alt='Certificate'></img></motion.a>
          <motion.button 
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{delay:1.5,duration:1}}
          exit={{scale:0}}
          className='bg-pink-500 px-5 py-2 rounded-md text-white' onClick={()=>navigate('/step3')}>Hit me for the Surprise!</motion.button>
        </motion.div>
    </motion.div>
  )
}

export default Step2