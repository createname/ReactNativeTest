/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Image, ActivityIndicator, SectionList, FlatList, Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView } from 'react-native';

export default class Page3 extends Component {




  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcom to Page3</Text>
      </View>

    );

  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    list:{
      paddingTop: 33,
      backgroundColor: '#F5FCFF'
    },
    thumbnail: {
      width: 53,
      height: 81
    },
    rightContainer:{
      flex: 1
    },
    title:{
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center'
    },
    year:{
      textAlign: 'center'
    }
});
