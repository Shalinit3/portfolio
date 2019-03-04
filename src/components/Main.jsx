import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import IconBar from './IconBars';
import Intro from './Intro';
import Work from './Work';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '100%',
    margin: 0
  },
  paper: {
    height: '100%',
    width: '100%',
    backgroundImage: "url('https://d3ansictanv2wj.cloudfront.net/bot-day-background-700x600-ce7fb2df41cfbf6c827cf229da02882a.jpg')",
    backgroundSize: '100% 100%',
    textAlign: 'center',
    color: '#fff'
  },
  control: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
    },
    background: '#000'
  },
  colorWhite: {
    color: '#fff',
  }
});
class Main extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} style={{ padding: '0px' }}>
          <Paper className={classes.control}>
            <Grid container style={{ height: '100%' }}>
              <Hidden xsDown>
                <Grid item xs={1} >
                  <Header />
                  <IconBar />
                </Grid>
              </Hidden>
              <Hidden smUp>
                <Header />
              </Hidden>
              <Grid item xs={12} sm={11} md={11} lg={11}>
                <Route exact path="/" component={Intro} />
                <Route path="/work" component={Work} />
                <Route path="/blog" component={Work} />
                <Route path="/my story" component={Intro} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);