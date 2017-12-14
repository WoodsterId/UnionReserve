import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import Login from '../login/login';
import Numpad from '../Main/App';

const MyNavScreen = ({ navigation, Notifications }) => (
  <View style={{flex:1}}>

  <View style={{backgroundColor: '#ffffff',flex:1}}>
    <View style={styles.FormStyle}> 
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always' }}>
          <Header
              backgroundColor='transparent'
              outerContainerStyles={styles.headerOuterContainer}
              leftComponent=
                {{ 
                  icon: 'menu', 
                  color: '#1e1e1f', 
                  onPress: () => navigation.navigate('DrawerOpen'),
                }}
              centerComponent={{ text: 'Rp.420.021', style: { color: '#fff',backgroundColor:'#1e1e1f',padding:8,borderRadius:20 } }}
              rightComponent=
                {{ 
                  icon: 'notifications', 
                  color: '#1e1e1f',
                  onPress: () => this.Notifications(),
                }}
            />     
        </SafeAreaView>
        <View style={{padding:20}}>
          <Numpad />
        </View>
      </ScrollView>
    </View>
  </View>

  <View style={{position:'absolute', left:0, right:0, bottom:0}}>
        <View style={{borderColor:'#000', borderWidth:0.3, }}>
        </View>

        <View style={styles.buttonBottom}>
          <View style={{padding:20,marginLeft:20}}>
            <TouchableOpacity>
              <Text style={{color:'#000'}}>
                REQUEST
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{borderColor:'#000',borderWidth:0.3}}>
          </View>

          <View style={{padding:20,marginRight:35}}>
            <TouchableOpacity>
              <Text style={{color:'#000'}}>
                PAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  </View>
  </View>
);

const styles = StyleSheet.create({
  headerOuterContainer:{
    borderBottomWidth: 0
  },
  FormStyle: {
    backgroundColor:'#ffffff'
  },
  buttonBottom:{
    justifyContent:'space-around',
    flexDirection:'row'
  }
});

export default MyNavScreen;

