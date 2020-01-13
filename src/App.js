import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

class App extends React.Component {

  state = {
    data: [],
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    fetch('data.json').then(response => {
      return response.json()
    }).then(data => {
      this.setState({data})
    }).catch(error => {
      console.log(error)
    })
  }

  onThumbClick = (type, index) => {
    if(type){
      const data= this.state.data
      data[index].thumbUpSelected = true;
      data[index].thumbDownSelected = false;
      this.setState({ data })
    }else{
      const data= this.state.data
      data[index].thumbUpSelected = false;
      data[index].thumbDownSelected = true;
      this.setState({ data })
    }
  }

  onVote = (index) => {
    const data = this.state.data
    if(data[index].thumbUpSelected){
      data[index].likes ++
      data[index].voted = true
      this.setState({data})
    }else if(data[index].thumbDownSelected){
      data[index].dislikes ++
      data[index].voted = true
      this.setState({data})
    }else{
      return;
    }
  }

  voteAgain = (index) => {
    const data = this.state.data;
    data[index].voted = false;
    data[index].thumbUpSelected = false;
    data[index].thumbDownSelected = false;
    this.setState({data})
  }


  render(){
    const { data } = this.state;
    const { onThumbClick, onVote, voteAgain } = this;

    return (
      <div className="main-container">
        <Header/>
        <Main data={data} onThumbClick={onThumbClick} onVote={onVote} voteAgain={voteAgain}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
