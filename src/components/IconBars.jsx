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
            <a href="https://twitter.com/@shalinity" >
            <img
            src="https://uploads-ssl.webflow.com/59a7431fcef5f30001a9cdb9/5b298a6f6677a53087f7fbc7_twitter.svg"       
            alt="Twitter Icon"
            />
            </a>
          </ListItemIcon>
        </MenuItem>
        <MenuItem className={classes.listItem}>
          <ListItemIcon  >
            <a href="https://www.linkedin.com/in/shalini-tyagi-0b2442120/">
            <img
              src="https://uploads-ssl.webflow.com/59a7431fcef5f30001a9cdb9/5b298a6e73a60ed9406cd954_linkedin.svg"
              alt="LinkedIn Icon"
            />
            </a>
           
          </ListItemIcon>
        </MenuItem>
        <MenuItem className={classes.listItem}>
          <ListItemIcon  >
            <a href="https://github.com/Shalinit3">
            <img
              src="https://img.icons8.com/color/30/000000/git.png"
              alt="Git Icon"
            />
            </a>
           
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
