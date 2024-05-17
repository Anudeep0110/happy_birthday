import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import { Routes,Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Step3 from './Step3'
import Step4 from './Step4'

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Step1/>}/>
            <Route path="/step2" element={<Step2/>}/>
            <Route path="/step3" element={<Step3/>}/>
            <Route path="/step4" element={<Step4/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes