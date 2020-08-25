import { css } from 'emotion';
import React from 'react';

export default function View(props) {
  const { className = '', ...other } = props;
  return (
    <div
      {...other}
      className={`${css`
        align-items: stretch;
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        display: flex;
        flex-basis: auto;
        flex-direction: column;
        flex-shrink: 0;
        margin: 0;
        padding: 0;
        position: relative;
        /* fix flexbox bugs */
        min-height: 0;
        min-width: 0;
      `} ${className}`}
    />
  );
}
