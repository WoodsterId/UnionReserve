import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, FormInput,Avatar } from 'react-native-elements';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconNavbar from 'react-native-vector-icons/dist/Feather';
import IconNavbar2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default class ListNavigation extends Component {
  render() {
    return (
      <View>      
        <View style={styles.avatar}>
          <Avatar
            large
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />

          <Text style={{color:'#fff',margin:5}}>Jane Doe</Text>

          <View>
            <TouchableOpacity>
              <Text style={{color:'#fff',fontSize:10}}>
                <Icon name="cog" size={10} style={{color:'#fff'}}/>  Profile Settings
              </Text>
            </TouchableOpacity>            
          </View>
        </View>

        <View style={styles.ListNavbar}>
          <View>
            <TouchableOpacity>
              <Text style={{fontSize:15,color:'#000',margin:10}}>
                <IconNavbar name="refresh-cw"size={17}/>     Transfer
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={{fontSize:15,color:'#000',margin:10}}>
                <IconNavbar2 name="cash-multiple" size={17}/>     Withdraw
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={{fontSize:15,color:'#000',margin:10}}>
                <IconNavbar2 name="credit-card-multiple" size={17}/>     Voucher
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={{fontSize:15,color:'#000',margin:10}}>
                <IconNavbar name="award" size={17}/>     Points and Rewards
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{borderTopColor:'#333',borderWidth:0.3}}>
        </View>

        <View style={styles.ListAddBalance}>
         <View>
            <TouchableOpacity>
              <Text style={{fontSize:15,color:'#000',margin:10}}>
                <IconNavbar2 name="plus-circle-outline" size={17}/>     Add Balance
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  avatar:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#3f3f40'
  },
  ListNavbar:{
    flexDirection:'column',
    justifyContent:'space-between',
    padding:10,
  },
  ListAddBalance:{
    padding:10,
  }
});