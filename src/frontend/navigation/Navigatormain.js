import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import PasswordRecovery from '../screens/PasswordRecovery';
import MainPage from '../screens/MainPage';
import PreventScreen from '../screens/PreventScreen';

const Navigatormain = createStackNavigator({
    
    Loginscreen: {
        screen: Login,
        navigationOptions: {
        headerShown: false,
    }
        
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
        headerShown: false,
    }
    },
    PwRecovery: {
        screen: PasswordRecovery,
        navigationOptions: {
        headerShown: false,
    }
    },
    Main: {
        screen: MainPage,
        navigationOptions: {
        headerShown: false,
    }
    },
    Prevent:{
        screen: PreventScreen,
        navigationOptions: {
        headerShown: false,
    }
    },
    
    
   
});


export default createAppContainer(Navigatormain);