import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { Table, Row } from 'react-native-table-component';
import { Footer } from 'native-base';

export default class RegisterPersonal extends Component {
  redirect(){
    this.props.navigation.navigate('Register')
  }

  forget(){
    this.props.navigation.navigate('Forget')
  }

  login(){
    this.props.navigation.navigate('Dashboard')
  }

  state = { email: '', password: '' };
  
  render() {
    const registerConst = (redirect) => (
      <TouchableOpacity
        onPress={() => {this.redirect()}}
      >
      <Text style={styles.stylebuttonBottom}>
        Register
      </Text>
    </TouchableOpacity> 
    );

    const forgetConst = (forget) => (
      <TouchableOpacity
        onPress={() => {this.forget()}}
      >
        <Text style={styles.stylebuttonBottom}>
          Forget Password
        </Text>
      </TouchableOpacity> 
    );
    const tableHead = [registerConst('Line 1'), forgetConst('Line 2')];
    return (
      <View style={{backgroundColor: '#1e1e1f',flex:1, paddingTop:150}}>
        <View style={styles.FormStyle}>
          <Text style={{color:'#FFFFFF',fontSize:20}}>Login</Text>
          <FormInput 
            inputStyle={{color:'#FFFFFF',textAlign:'center'}}
            underlineColorAndroid='#3f3f40'
            onChangeText={password => this.setState({ password })}
            placeholder='Email'
            placeholderTextColor='#3f3f40'
            
          />
          <FormInput 
            inputStyle={{color:'#FFFFFF',textAlign:'center'}}
            underlineColorAndroid='#3f3f40'
            secureTextEntry={true}
            placeholder='Password'
            placeholderTextColor='#3f3f40'
          />
        </View>

        <View style={styles.container}>
          <Button
            onPress={() => {this.login()}}
            title='Login' 
            backgroundColor='#3f3f40'
            textStyle={{color:'#FFFFFF'}}
            buttonStyle={{width:345}}
          />         
        </View>

        <View>
          <Table borderStyle={{borderColor:'#3f3f40',borderWidth:0}} 
            style={{position: 'absolute',flex:0.1,left: 0,right: 0,bottom:-225}}
          >
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:30
  },
  buttonBottom: {
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent: 'space-around',
  },
  FormStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stylebuttonBottom:{
    color:'#FFFFFF',
    textAlign:'center'
  },

  table: { 
    width: 360 
  },
  
  head: { 
    height: 70,
    borderColor:'#3f3f40', 
    backgroundColor: 
    '#1e1e1f' 
  },
  text: { 
    textAlign: 'center',
    color:'#FFFFFF' 
  }
});