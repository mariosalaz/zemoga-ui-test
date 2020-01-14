import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown  } from '@fortawesome/free-solid-svg-icons';

const ProgressBar = ({data}) => {
    const totalVotes = data.likes + data.dislikes;
    const percentageLikes = Math.round((data.likes / totalVotes)*100 || 0);
    const percentageDislikes = Math.round((data.dislikes / totalVotes)*100 || 0);

    
    return(
        <div className="progress-bar-main">
            <div className="progress-bar__like" style={{width: percentageDislikes === 100 ? "34%" : percentageLikes > 0 && percentageLikes < 34 ? "34%": percentageLikes > 60 ? "66%" : "50%"}}>
                <div className="percentage-container">
                    <span>
                        <FontAwesomeIcon icon ={faThumbsUp}/>
                    </span>
    <p className="percentage-number">{percentageLikes}%</p>
                </div>
            </div>
            <div className="progress-bar__dislike" style={{width: percentageLikes === 100 ? "34%" : percentageDislikes > 0 && percentageDislikes < 34 ? "34%": percentageDislikes > 60 ? "66%" : "50%"}}>
                <div className="percentage-container">
                    <p className="percentage-number">{percentageDislikes}%</p>
                    <span>
                        <FontAwesomeIcon icon ={faThumbsDown}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
