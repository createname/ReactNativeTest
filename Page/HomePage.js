/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Button, Image, ActivityIndicator, SectionList, FlatList, Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView } from 'react-native';

type Props = {};
export default class Page4 extends Component<Props> {

  static navigationOptions={
    title:'Home',
    headerBackTitle:'返回还好'//设置返回此页面的返回按钮
  };

  render() {
    const {navigation}=this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcom to HomePage</Text>
        <Button
          title={'Go to Page1'}
          onPress={()=>{
            //设置路由
            navigation.navigate('Page1', {name:'动态的'})
          }}
        />
        <Button
          title={'Go to Page2'}
          onPress={()=>{
            //设置路由
            navigation.navigate('Page2')
          }}
        />

        <Button
          title={'Go to Page3'}
          onPress={()=>{
            //设置路由
            navigation.navigate('Page3', {name:'Devio'})
          }}
        />

        <Button
          title={'Go to BottomNavigator'}
          onPress={()=>{
            //设置路由
            navigation.navigate('Bottom')
          }}
        />

        <Button
          title={'Go to TopNavigator'}
          onPress={()=>{
            //设置路由
            navigation.navigate('Top')
          }}
        />

        <Button
          title={'Go to DrawerNav'}
          onPress={()=>{
            //设置路由
            navigation.navigate('DrawerNav')
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
