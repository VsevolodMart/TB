import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import Button from '../../../components/atoms/Button';
import Theme, { Colors } from '../../../styles/style';


const getUserData = ({ navigation }) => (
  <SafeAreaView style={Theme.container}>
    <Text style={{marginBottom: 20, color: Colors.BLUE}}>Screen: User data</Text>

    <Button  onPress={ () => navigation.navigate('Home') } title='Home' size='large' color='black' fill='fill'/>
  </SafeAreaView>
);

export default getUserData;
