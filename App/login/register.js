import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';

export default class RegisterPersonal extends Component {
  redirect(){
    this.props.navigation.navigate('Login')
  }
  forget(){
    this.props.navigation.navigate('Forget')
  }
  state = { email: '', password: '' };
  render() {
    return (
      <View style={{backgroundColor: '#1e1e1f',flex:1, paddingTop:100}}>
        <View style={styles.FormStyle}>
          <Text style={{color:'#FFFFFF',fontSize:20}}>REGISTER AS PERSONAL</Text>
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
            onChangeText={password => this.setState({ password })}
            placeholder='Name'
            placeholderTextColor='#3f3f40'
            
          />
          <FormInput 
            inputStyle={{color:'#FFFFFF',textAlign:'center'}}
            underlineColorAndroid='#3f3f40'
            onChangeText={password => this.setState({ password })}
            placeholder='No Telp'
            placeholderTextColor='#3f3f40'
            
          />
          <FormInput 
            inputStyle={{color:'#FFFFFF',textAlign:'center'}}
            underlineColorAndroid='#3f3f40'
            secureTextEntry={true}
            placeholder='Password'
            placeholderTextColor='#3f3f40'
          />
          <FormInput 
            inputStyle={{color:'#FFFFFF',textAlign:'center'}}
            underlineColorAndroid='#3f3f40'
            secureTextEntry={true}
            placeholder='Re - Password'
            placeholderTextColor='#3f3f40'
          />
        </View>

        <View style={styles.container}>
          <Button
            onPress={() => {this.redirect()}}
            title='Create' 
            backgroundColor='#3f3f40'
            textStyle={{color:'#FFFFFF'}}
            buttonStyle={{width:345}}
          />         
        </View>

        <View style={{borderColor:'#FFFFFF', borderWidth:0.3, marginTop:60}}>
        </View>

        <View>
         <View>
              <TouchableOpacity onPress={() => {this.redirect()}}>
                <Text style={{fontSize:15,color:'#FFFFFF',padding:20,textAlign:'center'}}>
                  Already have an Account? Login  
                  <Text style={{fontWeight:'bold'}}> Here</Text>
                </Text>
              </TouchableOpacity>              
          </View>
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
    flex:1,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent: 'space-around',
  },
  FormStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});