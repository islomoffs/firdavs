import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import Home from './home'
import Contact from './contact'
import MyWork from './mywork'


export default function Header({ dark, setDark }) {

    const [nav, setNav] = useState(false)

    const handleDark = () => {
        setDark(!dark)
        console.log(dark);
    }

    const handleNavbar = () => {
        console.log("salom");
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
                    <ul id='resheader' style={{ top: nav !== true ? "30vh" : "-100vh" }}>
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
                            <span style={{ display: dark == true ? "none" : "block", color: dark !== true ? "#000" : "#fff" }}>
                                White
                            </span>
                            <span style={{ display: dark !== true ? "none" : "block", color: dark !== true ? "#000" : "#fff" }}>
                                Dark
                            </span>
                        </section>
                    </ul>
                    <ul id='header_res' style={{ top: nav !== true ? "30vh" : "-100vh" }}>
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
                            <span style={{ display: dark == true ? "none" : "block", color: dark !== true ? "#000" : "#fff" }}>
                                White
                            </span>
                            <span style={{ display: dark !== true ? "none" : "block", color: dark !== true ? "#000" : "#fff" }}>
                                Dark
                            </span>
                        </section>
                    </ul>
                    <ol className='haburger' onClick={handleNavbar}>
                        <span style={{ color: dark !== true ? "#000" : "#fff" }} ><AiOutlineMenu /></span>
                    </ol>
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

