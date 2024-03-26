import {View, Text} from 'react-native';
import React from 'react';

export default function Message({route}) {
  console.log('🚀 ~ Message ~ route:', route);
  const {variantType} = route.params;

  return (
    <View>
      <Text>Message {variantType}</Text>
    </View>
  );
}
