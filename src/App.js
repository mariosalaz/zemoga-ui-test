import React from 'react';
import Header from './components/Header';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="main-container">
        <Header/>
      </div>
    )
  }
}

export default App;
