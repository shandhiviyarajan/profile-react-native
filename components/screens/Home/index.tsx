import React from 'react';
import {View, Text, Button, NavigatorIOS} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      contentInsetAdjustmentBehavior="automatic">
      <Text>Home page</Text>
      <Button
        title="Details page"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
