import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <main>
            <div className="info-content">
                <div className="row">
                    <div className="info-content__left col-sm-3">
                        <p>Speak out. Be heard.</p>
                        <p>Be counted</p>
                    </div>
                    <div className="info-content__right col-sm-8">
                        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
                    </div>
                    <div className="close-info-content">
                        <span>
                            <FontAwesomeIcon icon ={faTimes}/>  
                        </span>
                    </div>
                </div>
            </div>
            <div className="votes-summary">
                <div className="votes-summary__title">
                    <h3>Votes</h3>
                </div>
            </div>
            <div className="add-people">
                <div className="row">
                    <p className="col-sm-9">
                        Is there anyone else you would want us to add?
                    </p>
                    <div className="submit-button col-sm-3 text-center">
                        <button className="btn btn-success">Submit a Name</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main; 