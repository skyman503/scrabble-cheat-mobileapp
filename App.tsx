
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';

import Input from './components/Input';
import List from './components/List';
import Header from './components/Header';

const Item = ({ word }) => (
  <View>
    <List word={word}></List>
  </View>
);

const App = () => {
  const [data, setData] = useState([]);

  const renderItem = ({ item }) => (
    <Item word={item} />
  );

  const checkInput = (text) => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'No item entered',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    }else{
      fetch('HOST_OF_SCRABBLE_CHEAT_ENGINE' + text, {
         method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        setData(data.names);
      })
      .catch((error) => {
         console.error(error);
      });


    }

  }



  return (
    <View style={styles.container}>
      <Header headerName="Scrabble Cheat"></Header>
      <Input checkInput={checkInput}></Input>

      <FlatList
        data={data}
        renderItem={renderItem}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;