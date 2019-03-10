import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = () => ({
  paper: {
    height: '100%',
    width: '100%',
    backgroundImage: "url(http://i1378.photobucket.com/albums/ah89/andreykokhanevich/portfolio%20page/footer-bg_zps1imhqalh.jpg)",
    backgroundSize: '100% 100%',
    textAlign: 'center',
    color: '#fff',
    flexGrow: 1,
  },
  colorWhite: {
    color: '#fff',
    paddingTop: '0.5em'
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: '38%',
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
  contact: {
    background: 'transparent',
    border: 0,
    boxShadow: 'none',
    color: 'white',
    height: 50,
    fontSize: '1rem',
    '&:hover': {
      background: 'transparent',
    }
  },
  rightIcon: {
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  container: {
    width: 'calc(100% + 12px)',
    marginTop: 50
  }
});
class Contact extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper} >
        <Typography className={classes.colorWhite} variant="h2" gutterBottom >Get in Touch</Typography>
        <Grid container spacing={24} className={classes.container}>
        <Grid item lg={7} md={7} xs={11}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5" className={classes.colorWhite}>
                Ready to hire me?
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button variant="contained" color="primary" className={classes.button}>
                Get in Touch
                <Icon className={classes.rightIcon}>
                  trending_flat
                </Icon>
              </Button>
          </div>
        </Grid>
        <Grid item lg={5} md={5} xs={11} style={{marginTop:10}}>
            <div className={classes.controls}>
              <Button variant="contained" className={classes.contact}>
              <Icon className={classes.icon}>
              near_me
                </Icon>
                shalinityagi64@gmail.com
              </Button>
            </div>
            <div className={classes.controls}>
              <Button variant="contained" className={classes.contact}>
              <Icon className={classes.icon}>
                  call
                </Icon>
                +91 9716532042           
              </Button>
            </div>
            <div className={classes.controls}>
              <Button variant="contained" className={classes.contact}>
              <Icon className={classes.icon}>
                  videocam
                </Icon>
                shalinityagi64
              </Button>
            </div>
        </Grid>
        </Grid>

      </Paper >
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Contact);