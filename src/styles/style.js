import { StyleSheet } from 'react-native';

import * as Colors from './constants';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Mixins from './mixins';

export { Typography, Spacing, Colors, Mixins };


const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

const btnBone = {
  ButtonSize: {
    small: {},
    medium: {},
    large: {
      width: 328,
      height: 48,
    },
  },
  ButtonTheme: {
    rounded: {
      borderRadius: 8,
    },
    white: {
      fill: {
        backgroundColor: Colors.WHITE,
      },
      stroke: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.WHITE,
      },
    },
  },

};

const buttonBone = {
  small: {},
  medium: {},
  large: {
    width: 328,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounded: {
    borderRadius: 8,
  },
  fillwhite: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.WHITE,
  },
  fillblack: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.WHITE,
  },
  strokewhite: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.WHITE,
  },
  strokeblack: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.BLACK,
  },
  largewhitefillBtn:{
    ...Typography.FONT_BOLD,
    ...Typography.FONT_SIZE_14,
    color: Colors.black,
  },
  largewhitestrokeBtn:{
    ...Typography.FONT_BOLD,
    ...Typography.FONT_SIZE_14,
    color: Colors.WHITE,
  }
};

const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.GREEN,
    ...Typography.FONT_REGULAR,
  },
  box: {
    ...baseBoxStyles,
  },
});


const mainStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.PRIMARY,
  },
  box: {
    ...baseBoxStyles,
  },
  text: {
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_24,
  },
});


const Theme = function getStyleSheet(useTheme) {
  return useTheme ? mainStyleSheet : lightStyleSheet;
};


export default Theme(true);
