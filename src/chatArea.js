import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputField from './components/inputField';
import ContactSection from './contactSection';
import Message from './components/messageArea';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    padding: '0px !important',
  },
  container: {
    margin: '0px !important',
  }
});

function ChatArea(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={23}>
        <Hidden smDown xsDown>
          <Grid item xs={12} sm={12} lg={4} className={classes.grid}>
            <Paper className={classes.paper}><ContactSection /> </Paper>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={12} lg={8} className={classes.grid}>
          <Paper className={classes.paper}>
          <Message />
          <InputField />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

ChatArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(ChatArea);