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

                <View style={{padding:20,marginTop:50}}>
                  <Text style={{color:'#000',textAlign:'center'}}>Insert Nominal</Text>
                  <Numpad />
                </View>

                <View style={{borderColor:'#000', borderWidth:0.3, marginTop:60}}>
                </View>

                <View style={styles.buttonBottom}>
                  <View>
                    <TouchableOpacity>
                      <Text style={{color:'#000', paddingTop:20}}>
                          Continue
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
    justifyContent:'center',
    alignItems:'center'
  }
});

