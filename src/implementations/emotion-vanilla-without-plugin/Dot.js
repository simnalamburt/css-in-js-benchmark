import { css } from 'emotion';
import React from 'react';

const Dot = ({ size, x, y, children, color }) => (
  <div
    className={css`
      position: absolute;
      cursor: pointer;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      border-top-width: 0;
      transform: translate(50%, 50%);
      border-bottom-color: ${color};
      border-right-width: ${size / 2}px;
      border-bottom-width: ${size / 2}px;
      border-left-width: ${size / 2}px;
      margin-left: ${x}px;
      margin-top: ${y}px;
    `}
  >
    {children}
  </div>
);

export default Dot;
