import {StackNavigator, DrawerNavigator} from 'react-navigation';
import RegisterScreen from '../login/register';
import LoginScreen from '../login/login';
import ForgetPassword from '../login/forgetPassword';
import DashboardScreen from '../Main/Dashboard';
import Listnavigation from './ListNavigation';

export const Stack = StackNavigator({
  
  Login:{
    screen:LoginScreen,
    navigationOptions: 
    {
      header: null
    } 
  },
  Register:{
    screen:RegisterScreen,
    navigationOptions: 
      {
        headerStyle:
          {
            position: 'absolute',
            backgroundColor: 'transparent',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
          },
        headerTintColor: 'white'
      } 
  },
  Forget:{
    screen:ForgetPassword,
    navigationOptions: 
      {
        header: null
      } 
  },

})

export const AfterLogin = StackNavigator({
  Dashboard:{
    screen:DashboardScreen,
    navigationOptions: 
      {
        header: null
      } 
  },
})

export const rootNavigation = (signIn) => {
  return DrawerNavigator ({
    AfterLogin :{
      screen:AfterLogin
    },
    Stack:{
      screen:Stack
    }
  },{
    contentComponent: Listnavigation,
    initialRouteName: signIn ? 'AfterLogin' : 'Stack'
  })
};
