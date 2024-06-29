import {StyleSheet} from 'react-native';
import theme from '../styles/theme.style.js';

export default StyleSheet.create({
  background: {
    backgroundColor: theme.PRIMARY_COLOR,
  },
  container: {
    backgroundColor: theme.TERNARY_COLOR,
  },
  button: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
  buttonText: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    fontFamily: theme.PRIMARY_FONT_FAMILY,
  },
  largeText: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    fontFamily: theme.PRIMARY_FONT_FAMILY,
  },
  mediumText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    fontFamily: theme.PRIMARY_FONT_FAMILY,
  },
  smallText: {
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontFamily: theme.PRIMARY_FONT_FAMILY,
  },
});
