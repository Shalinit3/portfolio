import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    height: '100%',
    width: '100%',
    backgroundImage: "url('https://regmedia.co.uk/2016/10/17/javascript_photo_via_shutterstock.jpg?x=442&y=293')",
    backgroundSize: '100% 100%',
    textAlign: 'center',
    color: '#fff',
    'overflow-y': 'scroll'
  },
  colorWhite: {
    color: '#fff',
    paddingTop: '0.5em'
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#42c58a',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -75,
    marginLeft: -75,
  },
  card: {
    margin: '0 10%',
    background: '#00000061',
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
    height:200
  },
  buttonSuccess: {
    backgroundColor: '#42c58a',
    '&:hover': {
      backgroundColor: '#42c58a',
    },
  },
  button: {
    marginLeft: '5%',
    marginTop: 65,
    background: 'transparent',
    color: 'white',
    boxShadow: 'none',
    height: 48,
    '&:hover': {
      background: 'transparent',
    }
  },
});

class Skills extends React.Component {
  state = {
    completed: 0,
  };

  render() {
    const { classes } = this.props;
    const skills = [
      {
        name: 'HTML',
        value: 75
      },
      {
        name: 'JS',
        value: 75
      },
      {
        name: 'CSS',
        value: 75
      },
      {
        name: 'React',
        value: 75
      },
      {
        name: 'Meteor',
        value: 75
      },
    ]
    return (
      <Paper className={classes.paper} >
        <Typography className={classes.colorWhite} variant="h2" gutterBottom >Skills</Typography>
        <Card className={classes.card}>
          <Grid container justify="center" spacing={24}>
            {
              skills.map(skill => (
                <Grid key={skill.name} lg={3} xs={12} md={3} item className={classes.wrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    {skill.name}
                  </Button>
                  <CircularProgress size={160} thickness={5} variant="static" value={skill.value} className={classes.progress} />
                </Grid>
              ))
            }
          </Grid>
        </Card>
      </Paper >
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);