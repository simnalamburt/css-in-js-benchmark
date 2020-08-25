import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

class View extends React.Component {
  render() {
    const { style, ...other } = this.props;
    return <div {...other} css={{ 
      alignItems: 'stretch',
      borderWidth: 0,
      borderStyle: 'solid',
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexDirection: 'column',
      flexShrink: 0,
      margin: 0,
      padding: 0,
      position: 'relative',
      // fix flexbox bugs
      minHeight: 0,
      minWidth: 0, 
      ...style
    }} />;
  }
}

export default View;
