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
      selectedBeast: 'none',
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

  render() {
   return (
    <>
    <Header />
    <Filter />
    <Main 
      data={data}
      handleOpenModal={this.handleOpenModal}
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
