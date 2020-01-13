import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <nav className="footer-nav">
                <ul className="footer-nav__items">
                    <li className="footer-nav__item"><a href="www.google.com" target="_blank">Terms and Conditions</a></li>
                    <li className="footer-nav__item"><a href="www.google.com" target="_blank">Privacy Policy</a></li>
                    <li className="footer-nav__item"><a href="www.google.com" target="_blank">Contact Us</a></li>
                </ul>
            </nav>
            <div className="social-media">
                <ul className="social-media-items">
                <li className="social-media-item"><a href="www.google.com" target="_blank">Follow Us</a></li>
                <li className="social-media-item"><a href="www.google.com"><span><FontAwesomeIcon icon ={faFacebookSquare}/></span></a></li>
                <li className="social-media-item"><a href="www.google.com"><span><FontAwesomeIcon icon ={faTwitter}/></span></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer