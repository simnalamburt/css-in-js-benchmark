import { bool } from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native-web';
import { colors } from './theme';

class AppText extends React.Component {
  static contextTypes = {
    isInAParentText: bool
  };

  render() {
    const { style, ...rest } = this.props;
    const { isInAParentText } = this.context;
    return <Text {...rest} style={[!isInAParentText && styles.baseText, style]} />;
  }
}

const styles = StyleSheet.create({
  baseText: {
    color: colors.textBlack,
    fontSize: '1rem',
    lineHeight: '1.3125em'
  }
});

export default AppText;
