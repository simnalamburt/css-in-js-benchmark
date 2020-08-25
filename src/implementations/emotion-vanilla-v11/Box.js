import React from 'react';
import View from './View';
import { css } from '@emotion-v11/css';

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => (
  <View
    {...other}
    className={`${styles[`color${color}`] ?? ''} ${fixed ? styles.fixed : ''} ${
      layout === 'row' ? styles.row : ''
    } ${outer ? styles.outer : ''}`}
  />
);

const styles = {
  outer: css`
    align-self: flex-start;
    padding: 4px;
  `,
  row: css`
    flex-direction: row;
  `,
  color0: css`
    background-color: #14171a;
  `,
  color1: css`
    background-color: #aab8c2;
  `,
  color2: css`
    background-color: #e6ecf0;
  `,
  color3: css`
    background-color: #ffad1f;
  `,
  color4: css`
    background-color: #f45d22;
  `,
  color5: css`
    background-color: #e0245e;
  `,
  fixed: css`
    width: 6px;
    height: 6px;
  `
};

export default Box;
