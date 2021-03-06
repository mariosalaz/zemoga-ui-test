import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';


const Main = ({data, onThumbClick, onVote, voteAgain}) => {
    return (
        <main>
            <div className="info-content">
                    <div className="info-content__left">
                        <p>Speak out. Be heard.</p>
                        <p>Be counted</p>
                    </div>
                    <div className="info-content__right">
                        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
                    </div>
                    <div className="close-info-content">
                        <span>
                            <FontAwesomeIcon icon ={faTimes}/>  
                        </span>
                    </div>
            </div>
            <div className="votes-summary">
                <div className="votes-summary__title">
                    <h3>Votes</h3>
                </div>
                <div className="votes-container">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="col-sm-6 single-card">
                                <Card  data={item} onThumbClick={onThumbClick} index={index} onVote={onVote} voteAgain={voteAgain} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="add-people">
                    <p className="col-sm-9">
                        Is there anyone else you would want us to add?
                    </p>
                    <div className="submit-button col-sm-3 text-center">
                        <div className="button-container">
                            <button type="button">Submit a Name</button>
                        </div>
                    </div>
            </div>
        </main>
    )
}

export default Main; 