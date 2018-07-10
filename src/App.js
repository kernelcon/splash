import React, { Component } from 'react';
import logo from './kernelcon_k_w.png';
import './App.scss';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const modalContentStyle = {
      padding: '0px',
      marginTop: '-170px'
    }
    return (
      <div className='App'>
        <div className='container'>
          <h1>
            April 2019
          </h1>
          <img src={logo} className='App-logo' alt="logo"/>
          <div className='sign-up-btn'>
            <Button onClick={this.toggleModal} href="#" title="Get Updates" />
          </div>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}
            title='Subscribe for Updates'
            modalContentStyle={modalContentStyle}
            height='380'
            width='500'>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScBplS_8WifTAZMQJ802Djd05wEm9xywlwOWY963tplDdZz9g/viewform?embedded=true"
                title="sign-up-form"
                width="560"
                height="580"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{'marginLeft': '-30px'}}>
                Loading...
              </iframe>
          </Modal>
          <h2>
            The midwest's premier information security conference.
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
