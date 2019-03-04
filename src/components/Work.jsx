import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = () => ({
  paper: {
    height: '100%',
    width: '100%',
    background: '#000',
    paddingLeft: '10%',
    backgroundSize: '100% 100%',
    color: '#fff'
  },
  colorWhite: {
    color: '#fff',
  },
  alignment: {
    color: '#fff',
    textAlign: 'center'
  },
  gridList: {
    width: '100%',
    height: '80%',
  },
});
class Work extends Component {

  render() {
    const { classes } = this.props;
    const imageUrl = 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const title = 'Mock Image'
    return (
      <Paper className={classes.paper} >
        <Typography component="h4" variant="h3" className={classes.colorWhite} gutterBottom>
          Work
        </Typography>
        <Typography variant="subtitle1" className={classes.alignment} gutterBottom>
        Welcome to my portfolio. These are recent projects.
        </Typography>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {/* {tileData.map(tile => ( */}
          <GridListTile cols={1}>
            <img src={imageUrl} alt={title} />
          </GridListTile>
          <GridListTile cols={2}>
            <img src={imageUrl} alt={title} />
          </GridListTile>
          <GridListTile cols={2}>
            <img src={imageUrl} alt={title} />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={imageUrl} alt={title} />
          </GridListTile>
          <GridListTile cols={3}>
            <img src={imageUrl} alt={title} />
          </GridListTile>
        {/* ))} */}
      </GridList>
      </Paper>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work);