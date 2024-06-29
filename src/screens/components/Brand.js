import React from 'react';
import {Text} from 'react-native';

const Brand = ({style: brandStyle}) => {
  return (
    <Text style={brandStyle} testID="brand">
      Brainee
    </Text>
  );
};

export default Brand;
