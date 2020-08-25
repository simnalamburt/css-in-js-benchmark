import { css } from '@emotion-v11/css';
import React from 'react';

const viewStyle = css`
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
`;

export default function View(props) {
  const { className = '', ...other } = props;
  return <div {...other} className={`${viewStyle} ${className}`} />;
}
