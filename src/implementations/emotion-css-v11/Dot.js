import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Dot = ({ size, x, y, children, color }) => (
  <div
    css={{
      position: 'absolute',
      cursor: 'pointer',
      width: 0,
      height: 0,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      transform: 'translate(50%, 50%)',
      borderBottomColor: color,
      borderRightWidth: `${size / 2}px`,
      borderBottomWidth: `${size / 2}px`,
      borderLeftWidth: `${size / 2}px`,
      marginLeft: `${x}px`,
      marginTop: `${y}px`
    }}
  >
    {children}
  </div>
);

export default Dot;
