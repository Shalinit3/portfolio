import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  paper: {
    height: '100%',
    width: '100%',
    background: "#000",
    backgroundSize: '100% 100%',
    textAlign: 'center',
    color: '#fff'
  },
  colorWhite: {
    color: '#fff',
  }
});
class Intro extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper} >
      </Paper >
    );
  }
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);