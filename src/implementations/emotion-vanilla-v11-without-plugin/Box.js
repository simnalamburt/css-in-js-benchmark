import React from 'react';
import View from './View';
import { css } from '@emotion-v11/css';

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => (
  <View
    {...other}
    className={css`
      align-self: flex-start;
      flex-direction: ${layout};
      padding: ${outer ? 4 : 0}px;
      ${fixed &&
      `
        width: 6px;
        height: 6px;
      `}
      background-color: ${getColor(color)};
    `}
  />
);

function getColor(color) {
  switch (color) {
    case 0:
      return '#14171A';
    case 1:
      return '#AAB8C2';
    case 2:
      return '#E6ECF0';
    case 3:
      return '#FFAD1F';
    case 4:
      return '#F45D22';
    case 5:
      return '#E0245E';
    default:
      return 'transparent';
  }
}

export default Box;
