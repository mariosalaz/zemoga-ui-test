import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeaderCard from './HeaderCard';


const Header = props => {
    return (
        <header>
            <nav>
                <div className="header__title">
                    <h2>Rule of Thumb.</h2>
                </div>
                <div className="header__nav-container">
                    <ul className="header__nav-items">
                        <li className="header__nav-item"><a href="about:blank" target="_blank">past rials</a></li>
                        <li className="header__nav-item"><a href="about:blank" target="_blank">how it works</a></li>
                        <li className="header__nav-item"><a href="about:blank" target="_blank">log in/sign up</a></li>
                        <span className="header__search-icon">
                            <FontAwesomeIcon icon ={faSearch}/>
                        </span>
                    </ul>
                </div>
            </nav>
            <HeaderCard/>
            <div className="header__remaining-days">
                <div className="row">
                    <div className="closing-text col-sm-4 text-right">
                        <p>closing in</p>
                    </div>
                    <div className="remaining-days-text col-sm-8">
                        <p><span>22</span> days</p>
                    </div>
                </div>    
            </div>
        </header>
    )
}

export default Header;