import React from 'react'
import "./css/Mywork.css"

// import Ava from './img/ava.jpg'

export default function mywork({ dark }) {
  return (
    <div className='mywork'>
      <div className="title-work">
        <h3 style={{ color: dark !== true ? "#000" : "#ffff" }}>
          Mening ishlarim
        </h3>
        <i>ko'proq</i>
      </div>
      <div className="cards-mywork">

        <a target='_blank' href='https://itutorwebsite.vercel.app/' className="card-mywork">
          <section style={{ backgroundColor: dark !== true ? "#fff" : "#000" }} className="top-work-card">
            <h1 style={{ color: dark !== true ? "#000" : "#ffff" }}>
              ITUTOR
            </h1>
            <div className="img-my-work">
              <img src="./img/itutor.png" alt="" />
            </div>
          </section>
        </a>


        <div className="card-mywork">
          <section style={{ backgroundColor: dark !== true ? "#fff" : "#000" }} className="top-work-card">
            <h1 style={{ color: dark !== true ? "#000" : "#ffff" }}>
              ITUTOR
            </h1>
          </section>
        </div>


        <div className="card-mywork">
          <section style={{ backgroundColor: dark !== true ? "#fff" : "#000" }} className="top-work-card">
            <h1 style={{ color: dark !== true ? "#000" : "#ffff" }}>
              ITUTOR
            </h1>
          </section>
        </div>


      </div>
      <div className="bgc-effect-mywork"></div>
    </div>
  )
}
