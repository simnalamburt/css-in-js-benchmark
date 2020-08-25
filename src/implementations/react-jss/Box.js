import { createUseStyles } from 'react-jss';
import React from 'react';
import View from './View';

const useStyles = createUseStyles(theme => ({
  root: (props) => ({
    ...(props.outer && {
      alignSelf: 'flex-start',
      padding: 4
    }),
    ...(props.layout === 'row' && {
      flexDirection: 'row'
    }),
    ...(props.color === 0 && {
      backgroundColor: '#14171A'
    }),
    ...(props.color === 1 && {
      backgroundColor: '#AAB8C2'
    }),
    ...(props.color === 2 && {
      backgroundColor: '#E6ECF0'
    }),
    ...(props.color === 3 && {
      backgroundColor: '#FFAD1F'
    }),
    ...(props.color === 4 && {
      backgroundColor: '#F45D22'
    }),
    ...(props.color === 5 && {
      backgroundColor: '#E0245E'
    }),
    ...(props.fixed && {
      width: 6,
      height: 6
    }),
  })
}));

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...other }) => {
  const classes = useStyles({ color, fixed, layout, outer, ...other });

  return <View
    {...other}
    className={classes.root}
  />
};

export default Box;
