/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Image, ActivityIndicator, SectionList, FlatList, Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcom to React Na</Text>
        <Text style={styles.title}>To get started, edit App.js</Text>

      </View>

    );

  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center' ,
      backgroundColor: '#F5FCFF'
    },

    title:{
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center'
    }
});
