import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import Button from '../../../components/atoms/Button';
import Theme, { Colors } from '../../../styles/style';


const getPhonenunmber = ({ navigation }) => (
  <SafeAreaView style={Theme.container}>
    <Text style={{marginBottom: 20, color: Colors.BLUE}}>Screen: Get phonenumber</Text>

    <Button  onPress={ () => navigation.navigate('step2') } title='Go to confirm' size='large' color='white' fill='fill'/>
  </SafeAreaView>
);

export default getPhonenunmber;
