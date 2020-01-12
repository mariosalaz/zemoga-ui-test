import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="main-container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;
