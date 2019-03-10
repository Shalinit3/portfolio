import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Heading from './Heading';

const styles = (theme) => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
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
    width: '95%',
    height: '80%',
    transform: 'translateZ(0)',
  },
  gridItem: {
    padding: '0.5px 15px 10px 0 !important',
    height: '100% !important', 
    overflow: 'hidden', 
  },
  image: {
    '-moz-transition': ' 0.4s ease',
    '-webkit-transition': ' 0.4s ease',
    'transition': ' 0.4s ease',
    '&:hover': {
      top: '5% !important',
      '-webkit-transform': 'scale(1.08)',
      'transform': 'scale(1.08)'
    }
  }
});
class Work extends Component {

  render() {
    const { classes } = this.props;

    const imageUrl = 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    const title = 'Mock Image';
    const tileData = [
      {
        img: imageUrl,
        title,
        author: 'Shalini Tyagi',
        featured: true
      },
      {
        img: imageUrl,
        title,
        author: 'Shalini Tyagi'
      },
      // {
      //   img: imageUrl,
      //   title,
      //   author: 'Shalini Tyagi'
      // },
      // {
      //   img: imageUrl,
      //   title,
      //   author: 'Shalini Tyagi',
      //   featured: true
      // },
      // {
      //   img: imageUrl,
      //   title,
      //   author: 'Shalini Tyagi'
      // }
    ]
    return (
      <Paper className={classes.paper} >
        <Heading text="Work" />
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={2} rows={2} className={classes.gridItem} >
              <img src={tile.img} alt={tile.title} className={classes.image}/>
              <GridListTileBar
                title={tile.title}
                titlePosition="bottom"
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work);