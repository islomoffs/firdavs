import React from 'react'
import { Link } from 'react-router-dom'
export default function footer() {

    const year = new Date().getFullYear();

    return (
        <div className="footer-home">
            <footer>
                <h1>
                    Firdavs.dev
                </h1>
                <Link to='mywork' >
                    <li>
                        portfoliyo
                    </li>
                </Link>
                <li>
                    <a href="tel:+99893-347-75-05">+99893-347-75-05</a>
                    <a className='email-fo' href="https://mail.google.com/mail">firdavskhimmatov@gmail.com</a>
                </li>
                <li>
                    © {year} Firdavs.dev All rights reserved
                </li>
            </footer>
        </div>

    )
}
