import React, {Component} from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import Button from '../../components/atoms/Button/index';
import Theme from '../../styles/style';
import * as Colors from '../../styles/constants';



export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={ Theme.container }>
        <Text style={{marginBottom: 20, color: Colors.BLUE}}>Screen: Login</Text>


        <Button  onPress={ () => navigate('step1') } title='LOGIN' size='large' color='white' fill='fill'/>

        <Button style={{marginTop: 30}}  onPress={ () => navigate('step1') } title='REGISTER' size='large' color='white' fill='stroke'/>

      </SafeAreaView>

    );
  }
}



