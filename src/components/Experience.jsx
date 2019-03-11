import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';


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
    marginLeft: '35%',
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
  stepper: {
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
  },
  stepIcon: {
    color: "#fff !important"
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    const experience = [
      {
        name: 'Successive Softwares',
        designation: 'Full-stack Developer',
        time: 'December 2017 - January 2019'
      },
      {
        name: 'IT globaliser',
        designation: 'Front-end Developer',
        time: 'April 2017 - September 2017'
      },

    ];

    return (
      <Paper className={classes.paper} >
        <Typography className={classes.colorWhite} variant="h2" gutterBottom >Experience</Typography>
        <Grid container spacing={24} className={classes.container}>
          <Grid item lg={7} md={7} xs={11}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5" className={classes.colorWhite}>
                Key Areas
              </Typography>
              <Typography variant="subtitle1" className={classes.colorWhite}>
                Front-end Developer and Full-stack Developer
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button variant="contained" href={'https://www.linkedin.com/in/shalini-tyagi-0b2442120/'} className={classes.button}>
                View on Linkedin
                <Icon className={classes.rightIcon}>
                  trending_flat
                </Icon>
              </Button>
            </div>
          </Grid>
          <Grid item lg={5} md={5} xs={11} style={{ marginTop: 10, marginBottom:20 }}>
            <Stepper  orientation="vertical" className={classes.stepper}>
              {experience.map((company) => (
                <Step key={company.name} completed>
                  <StepLabel
                   StepIconProps={{
                    classes: { root: classes.stepIcon }
                  }}
                   >
                    <Typography variant="subtitle1" className={classes.colorWhite}>{company.name}</Typography>
                    <Typography variant="subtitle2" className={classes.colorWhite}>{company.designation}</Typography>
                    <Typography variant="caption"  className={classes.colorWhite}>{company.time}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>

      </Paper >
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Experience);