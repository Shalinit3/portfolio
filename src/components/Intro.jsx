import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AnimatedText from './AnimatedText';

const styles = () => ({
  paper: {
    height: '100%',
    width: '100%',
    backgroundImage: "url('https://regmedia.co.uk/2016/10/17/javascript_photo_via_shutterstock.jpg?x=442&y=293')",
    backgroundSize: '100% 100%',
    textAlign: 'center',
    color: '#fff'
  },
  colorWhite: {
    color: '#fff',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: '5%',
    marginTop: '20px',
    background: 'transparent',
    border: '1px solid white',
    borderRadius: 3,
    color: 'white',
    height: 48,
    '&:hover': {
      background: 'transparent',
    }
  },
});
class Intro extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper} >
       <AnimatedText  />
       <div className={classes.controls}>
              <Button variant="contained" href={'https://dl.dropboxusercontent.com/s/ck82u92iulff8l6/Profile.pdf?dl=0'} className={classes.button}>
                Download Resume
                <Icon className={classes.rightIcon}>
                vertical_align_bottom
                </Icon>
              </Button>
            </div>
      </Paper >
    );
  }
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);