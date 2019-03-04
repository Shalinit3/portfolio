import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({
  root: {
    width: '35%',
    marginLeft: '20%',
    background: '#000',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '40%',
    },
  },
  colorWhite: {
    color: '#fff',
  },
  listItem: {
    paddingLeft: '0px'
  }
});

function IconBar(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem className={classes.listItem}>
          <ListItemIcon  >
            <img
              src="https://img.icons8.com/color/30/000000/twitter-squared.png"
              alt="Twitter Icon"
            />
          </ListItemIcon>
        </MenuItem>
        <MenuItem className={classes.listItem}>
          <ListItemIcon  >
            <img
              src="https://img.icons8.com/color/30/000000/linkedin.png"
              alt="LinkedIn Icon"
            />
          </ListItemIcon>
        </MenuItem>
        <MenuItem className={classes.listItem}>
          <ListItemIcon  >
            <img
              src="https://img.icons8.com/ios/30/000000/medium.png"
              alt="Medium Icon"
            />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

IconBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IconBar);
