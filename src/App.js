import React, { Component } from 'react';
import logo from './kernelcon_w_trans.png';
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
          <img src={logo} className='App-logo' alt="logo" height="150"/>
          <h1 className='coming-text'>
            Coming April 2019
          </h1>
          <div className='sign-up-btn'>
            <Button onClick={this.toggleModal} href="#" title="Keep Me Updated" />
          </div>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}
            title='Subscribe for Updates'
            modalContentStyle={modalContentStyle}
            height='420'
            width='500'>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScBplS_8WifTAZMQJ802Djd05wEm9xywlwOWY963tplDdZz9g/viewform?embedded=true"
                title="sign-up-form"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className='google-form'
                style={{'marginLeft': '-30px'}}>
                Loading...
              </iframe>
          </Modal>
          <h2 className='sub-text'>
            Omaha’s first fully-featured, community-driven information security conference.
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
