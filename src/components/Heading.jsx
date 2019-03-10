import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = {
  button: {
    background: 'linear-gradient(95deg, #FE6B8B 5%, #000 10%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 60,
    padding: '0 30px',
  },
}

function Header(props) {
  const { text } = props;

  return (
    <Typography
      style={{ ...styles.button }}
      variant="h2"
      gutterBottom
    >
      {text}
    </Typography>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;