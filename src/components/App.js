import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import Filter from './Filter.js';

import data from '../assets/data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      selectedNumOfHorns: -1,
      possibleNumOfHorns: [],
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
    })
  }

  setSelectedNumOfHorns = (num) => {
    this.setState({
      selectedNumOfHorns: num
    })
  }

  setPossibleNumOfHorns = (numArr) => {
    this.setState({
      possibleNumOfHorns: numArr
    })
  }

  render() {
   return (
    <>
    <Header />
    <Filter setSelectedNumOfHorns={this.setSelectedNumOfHorns}/>
    <Main 
      data={data}
      handleOpenModal={this.handleOpenModal}
      selectedNumOfHorns={this.state.selectedNumOfHorns}
      setPossibleNumOfHorns={this.setPossibleNumOfHorns}
    />
    <Footer />
    <SelectedBeast 
      showModal={this.state.showModal}
      handleCloseModal={this.handleCloseModal}
      beast={this.state.selectedBeast}
      />
    </>
   )
  }
}

export default App;
