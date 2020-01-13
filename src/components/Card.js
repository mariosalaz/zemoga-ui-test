import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Card = () => {
  return (
    <div className='card'>
        <div className="card-info-container">
            <div className="card__person-info">
            <h2 className="card__person-name">Kanye West</h2> 
            <p className="time-active"><span>1 month ago</span> In Entertainment</p>
            <p className="card__person-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="vote-menu">
                <div className="thumbs-menu">
                    <div className="thumbs-up">
                        <span>
                            <FontAwesomeIcon icon ={faThumbsUp}/>
                        </span>
                    </div>
                    <div className="thumbs-down">
                        <span>
                            <FontAwesomeIcon icon ={faThumbsDown}/>
                        </span>
                    </div>
                </div>
                <Button text={"Vote now"}/>
            </div>
        </div>
    </div>
  );
};

export default Card;
