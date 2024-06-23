import React from 'react'
import intro from "../../../../images/image-intro-desktop.jpg"
import './Section1.css'

function Section1() {
  return (
    <>
     <section className='sect1'>
        <div className='sect1-div'>
           <h1 className='sect1-text'>Humanizing your insurance.</h1>
           <p className='sect1-text2'>Get your life insurance coverage easier and faster. We blend our expertise 
           and technology to help you find the plan that’s right for you. Ensure you 
           and your loved ones are protected.</p>
           <button className='btn2'>View plans</button>
        </div>
        <div className='img-intro'>
            <img src={intro} alt="" />
        </div>
     </section>
    </>
  )
}

export default Section1