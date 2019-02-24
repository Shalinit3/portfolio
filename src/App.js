import React, { Component } from 'react';
import Header from './components/header';
import ChatArea from './chatArea';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ChatArea />
      </React.Fragment>
    );
  }
}

export default App;
