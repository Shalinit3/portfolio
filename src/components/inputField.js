import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Send from "@material-ui/icons/Send";
import Create from "@material-ui/icons/Create";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    width: "100%"
  },
  icon: {
    margin: "0px 9px",
    color: '#2981fa',
  },
  textField: {
    "border-radius": "0px !important",
    margin: '0px'
  }
});

class InputField extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <TextField
            className={classes.textField}
            placeholder="Write a message here"
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Create className={classes.icon} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <Send className={classes.icon} />
                  <ThumbUp className={classes.icon} />
                </InputAdornment>
              )
            }}
          />
        </FormControl>
      </div>
    );
  }
}

InputField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputField);
