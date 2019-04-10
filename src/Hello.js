import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css.js';

class Hello extends React.Component {
  render() {
    return <div style={styles.div}>{this.props.hello}</div>;
  }
}

Hello.propTypes = {
  hello: PropTypes.string
};

export default Hello;
