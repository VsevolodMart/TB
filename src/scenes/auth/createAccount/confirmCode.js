import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import Button from '../../../components/atoms/Button';
import Theme, { Colors } from '../../../styles/style';


const confirmCode = ({ navigation }) => (
  <SafeAreaView style={Theme.container}>
    <Text style={{marginBottom: 20, color: Colors.BLUE}}>Screen: confirm code</Text>

    <Button  onPress={ () => navigation.navigate('step3') } title='Go to geolocation' size='large' color='black' fill='fill'/>
  </SafeAreaView>
);

export default confirmCode;
