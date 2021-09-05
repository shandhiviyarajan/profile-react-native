import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}} contentInsetAdjustmentBehavior="automatic">
        <Text>Details page</Text>
        <Button title="Home page" onPress={()=>navigation.navigate('Home')}/>
      </View>
  );
};

export default DetailsScreen;
