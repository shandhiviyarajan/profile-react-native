import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
export const Button = props => {
  return (
    <TouchableHighlight {...props} activeOpacity={0.6} underlayColor="#dddddd">
      <View
            style={{
              paddingVertical: 12,
              paddingHorizontal: 24,
              backgroundColor: '#000000',
              borderRadius: 4,
            }}>
            <Text style={{fontSize: 18, color: '#fff'}}>{
            props.children}</Text>
            </View>
    </TouchableHighlight>
  );
};
