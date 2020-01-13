import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttonStyle from '../../../components/atoms/Button/style';
import * as Colors from '../../../styles/constants';


export default class Button extends Component {

  state = { style: {}, textColor: {} };

  styleCreator() {
    let { size, color, fill, rounded, style } = this.props;
    let obj = { ...buttonStyle[size], ...buttonStyle[color], ...buttonStyle[fill], ...buttonStyle[rounded], ...style };
    let { WHITE, BLACK } = Colors;

    if (fill === 'stroke' && color === 'white') {
      this.setState({ style: { ...obj, borderColor: WHITE }, textColor: { color: WHITE } });
    } else {
      this.setState({ style: { ...obj }, textColor: { color: BLACK } });
    }
    console.log(this.props);
  }

  componentDidMount() {
    this.styleCreator();
  }

  render() {
    return (
      <TouchableOpacity style={ this.state.style } onPress={ ()=>{this.props.onPress()}}>
        <Text style={ this.state.textColor }>{ this.props.title }</Text>
      </TouchableOpacity>
    );
  }
}
