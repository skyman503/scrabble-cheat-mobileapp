import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.word}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});


export default List;