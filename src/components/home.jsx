import React from 'react'
import Skils from './Skils'
import "./css/Home.css"
import About from './About'
import Footer from './footer'
import Portfoliyo from './mywork'

export default function home({ dark }) {
    return (
        <div className='home'>
            <div className="skils-home">
                <Skils dark={dark} />
            </div>
            <div className="about-home">
                <About dark={dark} />
            </div>
            <div className="portfoliyo-home">
                <Portfoliyo dark={dark} />
            </div>
            <Footer />
        </div>
    )
}
