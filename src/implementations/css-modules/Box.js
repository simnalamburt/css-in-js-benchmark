import React from 'react';
import View from './View';
import styles from './box-styles.module.css';

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => (
  <View
    {...other}
    className={`${styles[`color${color}`]} ${fixed ? styles.fixed : ''} ${
      outer ? styles.outer : ''
    } ${layout === 'row' ? styles.row : ''}`}
  />
);

export default Box;
