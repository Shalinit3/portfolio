import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import Main from './components/Main';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'inherit',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Main />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
