import React from 'react'
import "./Section2.css"
import snappy from '../../../../images/icon-snappy-process.svg'
import affordable from '../../../../images/icon-affordable-prices.svg'
import people from '../../../../images/icon-people-first.svg'

function Section2() {
  return (
    <>
      <div className='sect2'>
        <p className='sect2-p'>We’re different</p>
        <div className='sect2-div'>
          <div className='div1'>
             <img src={snappy} alt="icon" />
             <h3>Snappy Process</h3>
             <p>Our application process can be completed in minutes, not hours. Don’t get 
             stuck filling in tedious forms.</p>
          </div>
          <div className='div2'>
            <img src={affordable} alt="icon" />
            <h3>Affordable Prices</h3>
            <p>We don’t want you worrying about high monthly costs. Our prices may be low, 
            but we still offer the best coverage possible.</p>
          </div>
          <div className='div3'>
            <img src={people} alt="icon" />
            <h3>People First</h3>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make 
            sure you’re covered when you need it.</p>
          </div>
        </div>
        <section className='sect3'>
         <div className='sect3-div'>
           <div>
              <h2>Find out more about how we work</h2>
           </div>
           <button className='btn3'>How we work</button>
         </div>
      </section>
      </div>
      
    </>
  )
}

export default Section2