import {StyleSheet} from 'react-native';

import * as Colors from '../../styles/constants';
import * as Spacing from '../../styles/spacing';
import * as Typography from '../../styles/typography';
import * as Mixins from '../../styles/mixins';

export { Typography, Spacing, Colors, Mixins };


const styles = StyleSheet.create({
  contentWrapper: {
    borderWidth: 2,
    width: '100%',
    borderColor: Colors.WHITE
  },
  tableTitle: {
    borderBottomWidth: 2,
    borderColor: Colors.WHITE,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: Colors.GREEN
  },
  itemsWrapper: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBlockText: {
    fontSize: 16,
    color: Colors.WHITE,
  },
  boldText: {
    fontWeight: 'bold',
    color: Colors.GREEN
  },
  tableItem: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingRight: 10,
    borderColor: Colors.WHITE
  },
  fullSizeBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    color: Colors.GREEN
  },
  tableItemInfo: {
    flex: 1,
    color: Colors.GREEN
  },
  touchableStyled: {
    padding: 10,
    color: Colors.GREEN
  },
  centerElement: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: 10,
    color: Colors.WHITE
  },
});

export default styles;
