import React from 'react';
import {Text, View, Switch} from 'react-native';



//Styles
import styles from './styles.js';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { Colors } from '../../styles/style';

const {
  contentWrapper,
  tableTitle,
  itemsWrapper,
  messageBlockText,
  boldText,
  tableItem,
  tableItemInfo,
  centerElement,
  touchableStyled,
  fullSizeBlock,
} = styles;

export default class CustomList extends React.Component {
  getTableContent = () => {
    const {emptyListMessage, data, onPressHandler} = this.props;

    if (data?.length) {
      return (
        <>
          {data.map(item => {
            const {id, time, name, checked} = item;

            return (
              <View key={id} style={[tableItem, fullSizeBlock]}>
                <View style={tableItemInfo}>
                  <TouchableWithoutFeedback
                    style={touchableStyled}
                    onPress={onPressHandler(item)}>
                    <View style={fullSizeBlock}>
                      <Text style={{color: Colors.GREEN}}>{time}</Text>
                      <Text style={centerElement}>{name}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            );
          })}
        </>
      );
    }

    return <Text style={messageBlockText}>{emptyListMessage}</Text>;
  };

  render() {
    const {title} = this.props;

    return (
      <View style={contentWrapper}>
        <View style={tableTitle}>
          <Text style={[messageBlockText, boldText]}>{title}</Text>
        </View>
        <View style={itemsWrapper}>{this.getTableContent()}</View>
      </View>
    );
  }
}
