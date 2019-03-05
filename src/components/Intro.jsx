import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

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
        <Typography variant="subtitle1" className={classes.colorWhite} gutterBottom>
          Hello, My name is Shalini Tyagi and
        </Typography>
        <Typography component="h4" variant="h3" className={classes.colorWhite} gutterBottom>
          I AM A FULLSTACK DEVELOPER
        </Typography>
        <Typography variant="subtitle2" className={classes.colorWhite} gutterBottom>
          Creating modern and responsive design for web
        </Typography>
      </Paper>
    );
  }
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);