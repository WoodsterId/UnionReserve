import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonDashboard} from './';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      result:0,
      formula:"",
    }
    this.onPressOperatorOrNumber = this.onPressOperatorOrNumber.bind(this)
  }
  onPressOperatorOrNumber=(symbol)=>{
    this.setState({
      formula:this.state.formula+symbol
    })
  }

  backspaceOperator=()=>{
    this.setState({
      formula:this.state.formula.slice(0,this.state.formula.length-1)
    })
  }

  render() {
    return (
        <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
            <View style={{flex:0,backgroundColor:'#fff'}}>
              <View style={{flex:0,alignItems:'center',flexDirection:'row'}}>
                <Text style={styles.formulaText}>
                  Rp.{this.state.formula}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
            </View>
            <View style={styles.row}>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="1"/>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="2"/>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="3"/>
            </View>
            <View style={styles.row}>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="4"/>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="5"/>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="6"/>
            </View>
            <View style={styles.row}>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="7"/>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="8"/>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="9"/>
            </View>
            <View style={styles.row}>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title=""/>
              <ButtonDashboard  style={styles.buttonNumber} onPress={this.onPressOperatorOrNumber} title="0"/>
              <Icon.Button 
                name="chevron-left" 
                color="#494949" 
                backgroundColor="transparent" 
                style={styles.buttonNumber} 
                onPress={this.backspaceOperator}
                iconStyle={{marginRight:40,marginLeft:45,color:'#000'}}
              />
            </View>
          </View>
        </View>
    );
  }
}

const styles =StyleSheet.create({
  buttonNumber:{
    flex:1,
    height:75,
  },
  formulaText:{
    flex:1,
    color:'#000',
    textAlign :'left',
    fontSize:30,
    marginLeft:30
  },
  row:{
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'#fff',
    
  },
})
