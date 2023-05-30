import React from 'react'
export default function footer({ dark }) {

    const year = new Date().getFullYear();

    return (

        <footer>
            <h1
                style={{
                    color: dark !== true ? "#000" : "#fff"
                }}
            >
                Firdavs.dev
            </h1>
            <li style={{
                color: dark !== true ? "#000" : "#fff"
            }}  >
                <a style={{
                    color: dark !== true ? "#000" : "#fff"
                }} href="https://github.com/unknownKhimmatov">Github</a>
            </li>
            <li style={{
                color: dark !== true ? "#000" : "#fff"
            }}
            >
                <a
                    style={{
                        color: dark !== true ? "#000" : "#fff"
                    }}
                    href="tel:+99893-347-75-05">+99893-347-75-05</a>
                <a
                    style={{
                        color: dark !== true ? "#000" : "#fff"
                    }}
                    className='email-fo' href="https://mail.google.com/mail">firdavskhimmatov@gmail.com</a>
            </li>
            <li
                style={{
                    color: dark !== true ? "#000" : "#fff"
                }}
            >
                © {year} Firdavs.dev All rights reserved
            </li>
        </footer>


    )
}
