import React from 'react'
import AboutAva from './img/social.gif'
import "./css/About.css"
import { useNavigate } from 'react-router-dom'
import Insta from './icons/insta.png'
import Tg from './icons/telegram.png'
import tw from './icons/twitter.png'
import Youtube from './icons/youtube.png'
import Github from './icons/github.png'


export default function About({ dark }) {




    const navigate = useNavigate()
    const navigateHandle = () => {
        navigate('/contact')
    }




    return (
        <div className='about' >
            <div className="item-about">
                <div className="left-section">
                    <div className="item-left-section">
                        <h3 style={{ color: dark !== true ? "#000" : "#fff" }}>
                            Firdavs Ximmatov Akram o'g'li
                        </h3>
                        <section className='desc-about' style={{ color: dark !== true ? "#000" : "#fff" }}>
                            <span>
                                <span style={{
                                    fontWeight: "600",
                                    fontSize: "1.2rem",
                                    padding: "5px",
                                }}>
                                    O'qishim Haqida
                                </span><br /><br />
                                Men hozirda Japans international universtyning birinchi kurs talabasiman va IT texnologiylari (dasturlash) fakultetida o'qiyman
                            </span>
                            <span>
                                <span style={{
                                    fontWeight: "600",
                                    fontSize: "1.2rem",
                                    padding: "5px"
                                }}>
                                    Ishim Haqida
                                </span><br /><br />
                                Ishim esa Jomboy IT markazida Frontend o'qituvchisi sifatida faoliyat olib boraman. Va albatta o'qituvchilik bilan birgalikda men jiddiy loyihalar ustida ishlab boraman masalan "SORTIFY" loyihasi maktablar uchun davomat va turli masalalarda yordam berish uchun yaratilmoqda va loyiha asoschisi o'zimman tez orada bu loyiha sinov tariqasida ishga tushiriladi.
                            </span>
                        </section>
                        <span className="social-media">
                            <a href="https://t.me/firdacoder"><img src={Tg} alt="" /></a>
                            <a href="https://instagram.com/shafinpage"><img src={Insta} alt="" /></a>
                            <a href="https://twitter.com/firdavsakramovich"><img src={tw} alt="" /></a>
                            <a href="https://youtube.com/firdavsdev"><img src={Youtube} alt="" /></a>
                            <a href="https://github/com/unknownKhimmatov"><img src={Github} alt="sa" /></a>

                        </span>
                        <section className='buttons-about'>
                            <button onClick={navigateHandle} style={{ background: dark !== true ? "#000" : "#fff", color: dark !== true ? "#fff" : "#000" }} >
                                Hamkorlik
                            </button>
                            <button onClick={navigateHandle} style={{ background: dark !== true ? "#000" : "#fff", color: dark !== true ? "#fff" : "#000" }}>
                                Contact
                            </button>
                        </section>
                    </div>
                </div>
                <div className="right-section" style={{ backgroundColor: dark !== true ? "#ffffff9e" : "#000000" }}>
                    <img src={AboutAva} alt="" />
                    <div className="bgc-effect-about"></div>
                </div>
            </div>
        </div >
    )
}
