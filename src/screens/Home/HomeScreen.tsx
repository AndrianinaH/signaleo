import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Color from '../../themes/Color';

const styles = StyleSheet.create({
  title: {
    color: Color.black,
  },
});

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default HomeScreen;
