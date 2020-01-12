import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp, faThumbsDown  } from '@fortawesome/free-solid-svg-icons';

const HeaderCard = () => {
    return(
        <div className="header-card">
            <div className="header-card__main-content">
                <div className="header-card__main-content-title">
                    <p>What's your opinion on</p>
                    <h2>pope francis?</h2>
                </div>
                <div className="header-card__main-content-body">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, magnam ea sequi quae ad omnis delectus minima, ipsum ducimus nam nostrum laborum vitae perferendis quia similique reprehenderit illum autem optio.</p>
                    <a href="www.google.com" target="_blank" ><span className="header__search-icon">
                            <FontAwesomeIcon icon ={faWikipediaW}/> more information
                    </span></a>
                    
                    <p>What's your verdict?</p>
                </div>
            <div className="header-card__thumbs-container container">
                <div className="row">
                    <div className="thumbs-up-container col-sm-6">
                        <span>
                            <FontAwesomeIcon icon ={faThumbsUp}/>
                        </span>
                    </div>
                    <div className="thumbs-down-container col-sm-6">
                        <span>
                            <FontAwesomeIcon icon ={faThumbsDown}/>
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeaderCard;