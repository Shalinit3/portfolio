import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
});

function ContactSection(props) {
    const { classes } = props;
    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary="About Me" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Blogs" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="PRs" />
            </ListItem>
        </List>
    );
}

ContactSection.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactSection);
