import React, { useState, useEffect } from 'react';
import Footer from './footer';
import "./css/Contact.css"
export default function contact({ dark }) {
  return (
    <>

      <div className='contact'>
        <section className='form' >
          <div className="left-contact">
          </div>
          <div className="right-contact">
            <textarea name="" id="" placeholder='Massage...' cols="30" rows="10"></textarea>
            <section>
              <input type="email" name="" id="email" placeholder='firdavskhimmatov@gmail.com' />
              <button>
                Yuborish
              </button>
            </section>
          </div>
        </section>
        <div className="bgc-effect-contact"></div>
      </div>
      <Footer />
    </>
  )
}





