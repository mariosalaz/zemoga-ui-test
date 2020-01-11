import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = props => {
    return (
        <header>
            <nav>
                <div className="header__title">
                    <h2>Rule of Thumb.</h2>
                </div>
                <div className="header__nav-container">
                    <ul className="header__nav-items">
                        <li className="header__nav-item">past trials</li>
                        <li className="header__nav-item">how it works</li>
                        <li className="header__nav-item">log in / sign up</li>
                        <span>
                            <FontAwesomeIcon icon ={faSearch}/>
                        </span>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;