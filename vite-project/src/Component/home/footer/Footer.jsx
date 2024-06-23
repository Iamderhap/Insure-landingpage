import React from 'react'
import "./Footer.css"
import logo from "../../../../images/logo.svg"
import facebook from "../../../../images/icon-facebook.svg"
import twitter from "../../../../images/icon-twitter.svg"
import pinterest from "../../../../images/icon-pinterest.svg"
import instagram from "../../../../images/icon-instagram.svg"


function Footer() {
  return (
    <>
    <main>
    <section className='sect4'>
         <img src={logo} alt="logo" />
          <div className='images'>
             <img src={facebook} alt="facebook" />
             <img src={twitter} alt="twitter" />
             <img src={pinterest} alt="pinterest" />
             <img src={instagram} alt="instagram" />
          </div>
      </section>
      <footer>
          <div className='footer1'>
              <h3>OUR COMPANY</h3>
            <div className='footer1-div'>
             <p>How we work</p>
             <p>Why Insure?</p>
             <p>View plans</p>
             <p>Reviews</p>
            </div>
          </div>

          <div className='footer2'>
              <h3>Help me</h3>
            <div className='footer2-div'>
            <p>FAQ</p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Cookies</p>
            </div>
          </div>

          <div className='footer3'>
              <h3>Contact</h3>
            <div className='footer3-div'>
             <p>Sales</p>
             <p>Support</p>
             <p>Live chat</p>
            </div>
          </div>

          <div className='footer4'>
              <h3>Others</h3>
            <div className='footer4-div'>
             <p>Careers</p>
             <p>Press</p>
             <p>Licenses</p>
            </div>
          </div>
       </footer>
    </main>
    </>
  )
}

export default Footer