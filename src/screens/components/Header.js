/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import themeStyle from '../../styles/theme.style';
import appStyle from '../../styles/style';
import Brand from './Brand';

const Header = ({backgroundColor}) => {
  return (
    <View
      style={{
        display: 'flex',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        paddingTop: 5,
        paddingRight: 20,
        backgroundColor: backgroundColor,
      }}>
      <Brand
        style={[{color: themeStyle.SECONDARY_COLOR}, appStyle.largeText]}
      />
    </View>
  );
};

export default Header;
