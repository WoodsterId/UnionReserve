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

export default class Transfer extends Component{ 
render(){
    return(
        <View style={{backgroundColor: '#ffffff',flex:1}}>
            <View style={styles.FormStyle}> 
            <ScrollView>
                <View style={{padding:20}}>
                <Numpad />
                </View>

                <View style={{borderColor:'#000', borderWidth:0.3, marginTop:60}}>
                </View>

                <View style={styles.buttonBottom}>
                <View style={{padding:20,marginLeft:10}}>
                    <TouchableOpacity>
                    <Text style={{color:'#000'}}>
                        REQUEST
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderColor:'#000',borderWidth:0.3}}>
                </View>

                <View style={{padding:20,marginRight:40}}>
                    <TouchableOpacity>
                    <Text style={{color:'#000'}}>
                        PAY
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
            </View>
        </View>
        );
    }
}
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

