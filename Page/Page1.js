/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Button, Image, ActivityIndicator, SectionList, FlatList, Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView } from 'react-native';

export default class Page1 extends Component {



  render() {

    const {navigation}=this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcom to Page1</Text>
        <Button
          title={'Go Back'}
          onPress={()=>{
            navigation.goBack();
          }}
        />
        <Button
          title={'跳转到页面4'}
          onPress={()=>{
            navigation.navigate('Page4');
          }}
        />
      </View>

    );

  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
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
