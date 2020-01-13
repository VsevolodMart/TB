import { StyleSheet } from 'react-native';

import * as Colors from '../../../styles/constants';
import * as Spacing from '../../../styles/spacing';
import * as Typography from '../../../styles/typography';
import * as Mixins from '../../../styles/mixins';

export { Typography, Spacing, Colors, Mixins };

const buttonBone = {
  small: {},
  medium: {},
  large: {
    width: 328,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  fill: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.WHITE,
  },
  stroke: {
    borderWidth: 1,
    borderStyle: 'solid',
  },
  text: {
    ...Typography.FONT_BOLD,
    ...Typography.FONT_SIZE_14,
  },
};

 const buttonStyle = StyleSheet.create({
  ...buttonBone,
});

export default buttonStyle;
