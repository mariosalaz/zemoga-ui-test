import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";


const Card = ({ data, onThumbClick, index, onVote, voteAgain }) => {
    const imageUrl = `/img/${data.imgUrl}`;
    const cardImg = {
        backgroundImage: `url(${imageUrl})`
    }

  return (
    <div className='card-main-container' style={cardImg}>
        <div className="card-info-container">
            <div className="card__person-info">
            <h2 className="card__person-name">{data.name}</h2> 
            <p className="time-active"><span>{data.time}</span>{` in ${data.area}`}</p>
            <p className="card__person-description">{data.description}</p>
            </div>
            <div className="vote-menu">
                <div className="thumbs-menu">
                    <div className={`thumbs-up ${data.thumbUpSelected ? 'selected':''}`}>
                        <span onClick={()=> onThumbClick(true, index)}>
                            <FontAwesomeIcon icon ={faThumbsUp}/>
                        </span>
                    </div>
                    <div className={`thumbs-down ${data.thumbDownSelected ? 'selected':''}`}>
                        <span onClick={()=> onThumbClick(false, index)}>
                            <FontAwesomeIcon icon ={faThumbsDown}/>
                        </span>
                    </div>
                </div>
                {data.voted ? (
                    <div className="button-container">
                        <button type="button" onClick={() => voteAgain(index)}>Vote again</button>
                    </div>
                ):(
                    <div className="button-container">
                        <button type="button" onClick={() => onVote(index)}>Vote now</button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Card;
