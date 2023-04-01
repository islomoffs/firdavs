import React from 'react'
import 'animate.css';

import Html from './icons/html.png'
import Css from './icons/css3.png'
import Bots from './icons/bots.png'
import Js from './icons/javascript-logo.png'
import ReactLogo from './icons/react (1).png'
import Figma from './icons/figma.png'
import Ps from './icons/photoshop-logo (1).png'
import Github from './icons/github.png'
import Ava from './icons/home.gif'

export default function Skils({ dark }) {
  return (
    <div className='Skils' style={{ backgroundColor: dark !== true ? "#ffffff9e" : "#000000" }}>
      <div className="top-skils">
        <img src={Ava} alt="" />
      </div>
      <div className="description">
        <div className="item-description">
          <h1 className="name " style={{ color: dark !== true ? "#000" : "#fff" }}>
            Firdavs Khimmatov
          </h1>
          <span>
            Frontend developer and Web desinger (Backend beginner )
          </span>
          <div className="skils">
            <img src={Html} alt="sa" />
            <img src={Css} alt="sa" />
            <img src={Bots} alt="sa" />
            <img src={Js} alt="sa" />
            <img src={ReactLogo} alt="sa" />
            <img src={Figma} alt="sa" />
            <img src={Ps} alt="sa" />
            <img src={Github} alt="sa" />
          </div>
          <div className="buttons">
            <button>Resume</button>
            <a href=""><button>Github</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
