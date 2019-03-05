import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Clear from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    [theme.breakpoints.up('sm')]: {
      height: '75%'
    },

  },
  appBar: {
    backgroundColor: "#000",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 20,
    padding: 0,
    height: '5%',
    marginLeft: '20%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '40%',
    },
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    backgroundColor: "#000",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  smallItem: {
    color: "#fff",
    padding: '5px 40px'
  },
  largeItem: {
    color: "#fff",
    fontSize: '135%',
    padding: '5px 40px'
  },
  divider: {
    backgroundColor: ' #ea414a',
    width: '20px',
    height: '2px',
    marginTop: '25px',
    marginBottom: '25px',
    marginLeft: '35%',
  },
  colorWhite: {
    color: '#fff',
    fontSize: '27px'
  },
  menuButtonTwo: {
    marginRight: 20,
    padding: 0,
    height: '5%',
    marginLeft: '2%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '40%',
    },
  },
});

class Header extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Hidden smUp>
          <AppBar className={classes.appBar}>
            <Toolbar variant="dense">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButtonTwo, open && classes.hide)}
              >
                <MenuIcon className={classes.colorWhite} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Hidden>
        <Hidden xsDown>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon className={classes.colorWhite} />
          </IconButton>
        </Hidden>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <Clear className={classes.colorWhite} />
            </IconButton>
          </div>
          <Divider />
          <List>
            {["My Story", "Work", "Blog"].map(text => (
              <ListItem button key={text} onClick={this.handleDrawerClose}>
                <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                  <Typography className={classes.largeItem}>{text}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider className={classes.divider} />
          <List>
            {["Contact", "Skills", "Reading List"].map(text => (
              <ListItem button key={text} onClick={this.handleDrawerClose}>
                <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                <Typography className={classes.smallItem}>{text}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
