import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { rootNavigation} from './components/router';


 class App extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        signedIn: false,
        checkedSignIn: false,
        isConnected: true
      };
    }
  componentWillMount(){
    this.setState({signedIn : false})
  }

  render() {
    const  { checkedSignIn, signedIn, isConnected } = this.state;
    const Layout = rootNavigation (signedIn);
    return (
      <Layout/>
    );
  }
}

export default App;

