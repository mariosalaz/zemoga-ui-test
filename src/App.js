import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal'
import './App.scss';

class App extends React.Component {

  state = {
    data: [],
    showModal: false
  }

  componentDidMount = () => {
    
    this.getData()
    window.addEventListener('beforeunload', this.saveData);
  }

  componentWillUnmount = () => {
    this.saveData();
    window.removeEventListener('beforeunload', this.saveData);
  }

  getData = () => {
    const getData = JSON.parse(sessionStorage.getItem("savedData")) !== undefined ? JSON.parse(sessionStorage.getItem("savedData")): null;
  
    if(getData === null || getData.length === 0 ){
      fetch('data.json').then(response => {
        return response.json()
      }).then(data => {
        this.setState({data})
      }).catch(error => {
        console.log(error)
      })  
    }else{
      this.setState({data: getData})
    }
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
      this.showModal()
      data[index].likes ++
      data[index].voted = true
      this.setState({data})
    }else if(data[index].thumbDownSelected){
      this.showModal()
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

  saveData = () => {
    const data = this.state.data;
    sessionStorage.setItem("savedData", JSON.stringify(data));
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };




  render(){
    const { data } = this.state;
    const { onThumbClick, onVote, voteAgain, hideModal } = this;

    return (
      <div className="main-container">
        {this.state.showModal &&  (
          <Modal  hideModal={hideModal}/>
        )}
        <Header/>
        <Main data={data} onThumbClick={onThumbClick} onVote={onVote} voteAgain={voteAgain}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
