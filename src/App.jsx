import React, { useState, useEffect } from 'react'
import Header from './components/header'
import ScrollTop from './ScrollTop'
import "../src/components/css/Responsive.css"

export default function App() {

    const [dark, setDark] = useState(false)

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }



    const [scrollTop, setScrollTop] = useState("none");
    const listenScrollEvent = () => {
        window.scrollY > 1000 ? setScrollTop("flex") : setScrollTop("none");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return (
        <div className='app' style={{ backgroundColor: dark !== true ? "#fff" : "#000" }} >
            <ScrollTop />
            <Header dark={dark} setDark={setDark} />


            <div className="scrolltop"
                onClick={handleScroll}
                style={{
                    backgroundColor: dark !== true ? "#000" : "#fff",
                    display: scrollTop,
                    color: dark !== true ? "#fff" : "#000"
                }}

            >
                Top

            </div>
        </div>
    )
}
