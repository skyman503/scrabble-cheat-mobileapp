import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {

  return (
    <View style={styles.header}>
        <Text style={styles.text}>{props.headerName}</Text>
    </View>
  );
};

Header.defaultProps = {
    headerName: "Scrabble Cheat",
};

const styles = StyleSheet.create({
    header: {
      height: 80,
      padding: 35,
      backgroundColor: 'darkslateblue',
    },
    text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
    },
  });


export default Header;