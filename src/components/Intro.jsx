import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AnimatedText from './AnimatedText';

const styles = () => ({
  paper: {
    height: '100%',
    width: '100%',
    backgroundImage: "url('https://d3ansictanv2wj.cloudfront.net/bot-day-background-700x600-ce7fb2df41cfbf6c827cf229da02882a.jpg')",
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
       <AnimatedText  />
      </Paper >
    );
  }
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);