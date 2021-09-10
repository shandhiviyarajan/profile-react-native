import React from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {text} from '../../../core/Styles/textStyles';
import {Button} from '../../atoms/Button';

export const Login = () => {
  return (
    <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            position: 'absolute',
            zIndex: 100,
            top: 40,
            width: '100%',
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 24, color: '#fff'}}>
            Dashboard
          </Text>
          <Text style={{color: '#fff', fontSize: 14, marginVertical: 6}}>
            Manage your project & team in one way
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/dashboard1.png')}
          style={{width: '100%'}}
        />
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Text style={[text.primary, text.large, text.bold]}>
          Welcome to Dashboard
        </Text>
        <ActivityIndicator color="#000" />
        <TextInput />
        <Button onPress={() => Alert.alert(0)}>Sign in</Button>
      </View>
    </View>
  );
};
