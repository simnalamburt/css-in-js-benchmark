import React from 'react';
import styles from './view-styles.module.css';

class View extends React.Component {
  render() {
    const props = this.props;
    return <div {...props} className={`${styles.initial} ${props.className}`} />;
  }
}

export default View;
