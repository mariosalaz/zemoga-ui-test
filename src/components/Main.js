import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Card from './Card';


const count= [1 ,2, 3, 4];
const Main = () => {
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
                    {count.map(item => {
                        return (
                            <div className="col-sm-6 single-card">
                                <Card/>
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
                        <Button text={"Submit a Name"}/>
                    </div>
            </div>
        </main>
    )
}

export default Main; 