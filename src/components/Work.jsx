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
    marginLeft: '45%',
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
  rightIcon: {
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  container: {
    width: 'calc(100% + 12px)',
    marginTop: 50
  },
  stepIcon: {
    color: "#fff !important"
  }
});
class Work extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper} >
        <Typography className={classes.colorWhite} variant="h2" gutterBottom >Work</Typography>
        <Grid container spacing={24} className={classes.container}>
          <Grid item lg={12} md={12} xs={12}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle1" className={classes.colorWhite}>
               Checkout my work on github
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button variant="contained" href={'https://github.com/Shalinit3'} className={classes.button}>
                Github
                <Icon className={classes.rightIcon}>
                  trending_flat
                </Icon>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper >
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Work);