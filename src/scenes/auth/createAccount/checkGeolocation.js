import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import Button from '../../../components/atoms/Button';
import Theme, { Colors } from '../../../styles/style';


const checkGeolocation = ({ navigation }) => (
  <SafeAreaView style={Theme.container}>
    <Text style={{marginBottom: 20, color: Colors.BLUE}}>Screen: geolocation</Text>

    <Button  onPress={ () => navigation.navigate('step4') } title='geolocation' size='large' color='black' fill='fill'/>
  </SafeAreaView>
);

export default checkGeolocation;
