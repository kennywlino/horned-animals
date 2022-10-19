import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';

import data from '../assets/data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  }

  render() {
   return (
    <>
    <Header />
    <Main 
      data={data}
      handleOpenModal={this.handleOpenModal}
    />
    <Footer />
    <SelectedBeast 
      showModal={this.state.showModal}
      handleCloseModal={this.handleCloseModal}
      />
    </>
   )
  }
}

export default App;
