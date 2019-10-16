/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Image, ActivityIndicator, SectionList, FlatList, Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import MapView from './MapView.js';

export default class Page2 extends Component {



  render() {
    const region = {
    latitude: 37.48,
    longitude: -122.16,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
    return (
      <MapView zoomEnabled={true} region={region} style={{ flex: 1 }} />
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
