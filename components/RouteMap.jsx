import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RouteMap = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Route Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default RouteMap;
