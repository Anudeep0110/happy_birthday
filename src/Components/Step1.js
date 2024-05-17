import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Step1 = () => {

    const navigate = useNavigate()

    const [btn,setBtn] = React.useState('Anthena gurtundhi!')
    const handleChange = (e) => {
        if(e.target.value === '2022-02-16'){
            setBtn('Sooper bujjamma!');
        }else{
            setBtn('Anthena gurtundhi!');
        }
    }
    const gotoStep2 = () => {
        if(btn === 'Sooper bujjamma!'){
            navigate('/step2');
        }else{
            alert('Chi! Po! marchipoyaava appudey!');
        }
    }
  return (
    <motion.div className='min-h-screen bg-pink-200 flex justify-center items-center uppercase text-2xl'>
        <motion.div className='flex flex-col gap-y-10 py-10 items-center md:w-[80%] w-[98%]'
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            exit = {{opacity:0}}
            transition={{delay:1,duration:2}}
        >
            <p className='text-7xl text-red-600'>Hey! Hi my dear! &#10084;</p>
            <div className='w-full flex flex-col items-center'>
                <ul className=' list-disc'>
                    <motion.li initial={{opacity:0,x:'-50px'}} animate={{opacity:1,x:0}} exit={{opacity:0,x:'50px'}} transition={{delay:1.1,duration:.8}}>
                        <p>It's just a small Treasure Hunt of our Love.</p>
                    </motion.li>
                    <motion.li initial={{opacity:0,x:'-50px'}} animate={{opacity:1,x:0}} exit={{opacity:0,x:'50px'}} transition={{delay:1.5,duration:.8}}>
                        <p>Solve each level by answering the questions correctly.</p>
                    </motion.li>
                    <motion.li initial={{opacity:0,x:'-50px'}} animate={{opacity:1,x:0}} exit={{opacity:0,x:'50px'}} transition={{delay:1.9,duration:.8}}>
                        <p>All the Best dear &#10084;.</p>
                    </motion.li>
                </ul>
            </div>
            <div className='border flex flex-col items-center gap-y-10 py-5'>
                <motion.label
                initial={{opacity:0,y:'-50px'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'50px'}} transition={{delay:2.3,duration:.8}}
                className='text-4xl'>Do you remember the Date when shit entered into your Life ?</motion.label>
                <motion.input
                initial={{opacity:0,y:'-50px'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'50px'}} transition={{delay:2.7,duration:.8}}
                className='py-2 px-5 w-1/2 rounded-xl' type='date'onChange={handleChange}></motion.input>
                <motion.button 
                initial={{opacity:0,y:'-50px'}} animate={{opacity:1,y:0}} exit={{opacity:0,y:'50px'}} transition={{delay:3.1,duration:.8}}
                className='bg-pink-500 px-5 py-2 rounded-md text-white'
                onClick={gotoStep2}
                >{btn}</motion.button>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Step1