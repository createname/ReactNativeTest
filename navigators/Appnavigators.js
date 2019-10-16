
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import React, { Component } from 'react';
import {Platform, Button, ScrollView}from 'react-native'
import HomePage from '../Page/HomePage'
import Page1 from '../Page/Page1'
import Page2 from '../Page/Page2'
import Page3 from '../Page/Page3'
import Page4 from '../Page/Page4'
import Page5 from '../Page/Page5'
import Login from '../Page/Login'



export const DrawerNav = createDrawerNavigator({//抽屉式
  Page4:{
    screen:Page4,
    navigationOptions:{
      drawerLabel:'Page4',
      drawerIcom:({tintColor}) =>{
        <MaterialIcons
          name={'drafts'}
          size={24}
          style={{color: tintColor}}
        />
      }
    }
  },
  Page5:{
    screen:Page5,
    navigationOptions:{
      drawerLabel:'Page5',
      drawerIcom:({tintColor}) =>{
        <MaterialIcons
          name={'move-to-inbox'}
          size={24}
          style={{color: tintColor}}
        />
      }
    }
  },
},{
  initialRouteName: 'Page4',
  contentOptions:{
    activeTintColor:'#e91e63',
  },
  // contentComponent:(props)=>{
  //   return (
  //     <ScrollView style={{backgroundColor:'#789', flex:1}}>
  //       <SafeAreaView
  //         forceInset={{top:'always', horizontal:'naver'}}
  //       >
  //         <DrawerNavigatorItems {...props} />
  //       </SafeAreaView>
  //     </ScrollView>
  //   );
  //
  //
  // }
}
);

const CustomDrawerContentComponent = props => (
  <ScrollView style={{backgroundColor:'#789', flex:1}}>
    <SafeAreaView
      forceInset={{top:'always', horizontal:'naver'}}
    >
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export const AppTopNavigator=createMaterialTopTabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarlabel: 'All'
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarlabel: 'ios'
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarlabel: 'React'
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      tabBarlabel: 'React'
    }
  },
  Page5: {
    screen: Page5,
    navigationOptions: {
      tabBarlabel: 'React'
    }
  },
},{
  tabBarOptions:{
    tabStyle: 50,
    upperCaseLabel:false,//是否使用标签大写 默认true
    scrollEnabled:true,//是否支持滚动 默认false
    style:{
      backgroundColor:'#678'//Tabbar的背景色
    },
    indicatorStyle:{
      height:2,
      backgroundColor:'white'
    },
    labelStyle:{
      fontSize:13,
      marginTop:6,
      marginBottom:6
    }
  }
}
);

export const AppBottomNavigator=createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarlabel: '最热'
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarlabel: '趋势'
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarlabel: '收藏'
      }
    },
    Page4: {
      screen: Page4,
      navigationOptions: {
        tabBarlabel: '我的'
      }
    },
  },{
    tabBarOptions:{
      activeTintColor: Platform.OS === 'ios' ? '#e91e63':'#fff',
    }
  }
);

export const AppStackNavigator=createStackNavigator({
  HomePage:{
    screen:HomePage
  },

  Page1:{
    screen:Page1,
    navigationOptions:({navigation})=>({//动态配置
      title:'${navigation.state.params.name}页面名'
    })
  },

  Page2:{
    screen:Page2,
    navigationOptions:{//在这里定义每个页面导航数据  静态配置
      title: 'This is Page2'
    }
  },

  Page3:{
    screen:Page3,
    navigationOptions:(props)=>{
      const {navigation}=props;
      const {state,setParams}=navigation;
      const {params}=state;
      return {
        title: params.title?params.title:'This is page3',
        headerRight:(
          <Button
            title={params.mode==='edit'?'保存':'编辑'}
            onPress={()=>setParams({mode:params.mode==='edit'?'':'edit'})}
          />
        )
      }
    }
  },

  Page4:{
    screen:Page4,
    navigationOptions:{//在这里定义每个页面导航数据  静态配置
      title: 'This is Page4'
    }
  },
  Bottom:{
    screen:AppBottomNavigator,
    navigationOptions:{
      title: 'BottomNavigator'
    }
  },
  Top:{
    screen:AppTopNavigator,
    navigationOptions:{
      title: 'TopNavigator'
    }
  },
  DrawerNav:{
    screen:DrawerNav,
    navigationOptions:{
      title: 'DrawerNav'
    }
  }
});
