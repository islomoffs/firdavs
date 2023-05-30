import React, { useState, useEffect } from 'react';
export default function Contact() {

  const [modal, setModal] = useState(false)
  const handleModalClick = () => {
    setModal(!modal)
    console.log("modal", modal);
  }

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <>

      <form action="firdavsximmatov@gmail.com" method="post" enctype="text/plain" >
        <div className='contact'>
          <section className='form' >
            <div className="left-contact">
            </div>
            <div className="right-contact">
              <textarea name="" id="" placeholder='Massage...' cols="30" rows="10"></textarea>
              <section>
                <input type="email" name="" id="email" placeholder='firdavskhimmatov@gmail.com' />
                <button type='submit' onClick={handleModalClick}>
                  Yuborish
                </button>
              </section>
            </div>
          </section>
          <div className="bgc-effect-contact"></div>
        </div>
      </form>
    </>
  )
}



