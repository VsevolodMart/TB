import React from 'react';
import { View, Text, Button,Image} from 'react-native';
import Theme from '../../styles/style';
import image from '../../assets/images/photo_2020-01-05_22-53-02.jpg'

import CustomList from '../CustomList/index.js'




const medications = [
  {
    id: 'aaa',
    time: '12:03',
    name: 'analgin',
    checked: true,
  },
  {
    id: 'bbb',
    time: '09:00',
    name: 'aspirin',
    checked: true,
  },
];

export default class HomeScreen extends React.Component {
  state = {
    medications,
  };

  goToDetails = item => () => {
    const {
      navigation: {navigate},
    } = this.props;

    navigate('Client', {item});
  };



  render() {

    const {medications} = this.state;

    return (
      <View style={Theme.container}>
        <CustomList
          title="medications"
          emptyListMessage="No medications today"
          data={medications}
          onPressHandler={this.goToDetails}
        />
      </View>
    );
  }
}
