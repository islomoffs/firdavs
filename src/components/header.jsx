import React, { useContext, useState } from 'react'
import { FiSmartphone } from 'react-icons/fi'
import { Routes, Route, Link } from 'react-router-dom'
import "./css/header.css"

// import { Context } from '../Context/Context'
import Home from './home'
import Contact from './contact'
import MyWork from './mywork'


export default function Header({ dark, setDark }) {


    const handleDark = () => {
        setDark(!dark)
        console.log(dark);
    }



    return (

        <>
            <header style={{ backgroundColor: dark !== true ? "#ffffff9e" : "#000000" }}>
                <nav style={{ backgroundColor: dark !== true ? "#ffffff9e" : "#0000009e" }}>
                    <ol>
                        <li style={{ color: dark !== true ? "#000" : "#fff" }}>
                            Firdavs.dev
                        </li>
                    </ol>
                    <ul>
                        <Link to='/'>
                            <li style={{ color: dark !== true ? "#000" : "#fff" }}>
                                home
                            </li>
                        </Link>
                        <Link to='contact'>
                            <li style={{ color: dark !== true ? "#000" : "#fff" }}>
                                contact
                            </li>
                        </Link>
                        <section className='darkmode' onClick={handleDark} style={{ backgroundColor: dark !== true ? "#fff" : "#000", border: dark !== true ? "1px solid #000" : "1px solid  #fff" }}>
                            <span style={{ display: dark !== true ? "none" : "block", color: dark !== true ? "#000" : "#fff" }}>
                                White
                            </span>
                            <span style={{ display: dark !== true ? "block" : "none", color: dark !== true ? "#000" : "#fff" }}>
                                Dark
                            </span>
                        </section>
                    </ul>
                </nav>
                <div className="bgc-effect">
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home dark={dark} />} ></Route>
                <Route path='mywork' element={<MyWork />} ></Route>
                <Route path='contact' element={<Contact />} ></Route>
            </Routes>
        </>
    )
}

