import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

const Header = ({titleText}) => {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.containerStyle}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#242424',
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
});

export default Header;
