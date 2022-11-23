//Navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screen imports
import { HomeScreen } from './Screens/HomeScreen';
import { ClientsScreen } from './Screens/ClientsScreen';
import { ProductsScreen } from './Screens/ProductsScreen';
import { SalesScreen } from "./Screens/SalesScreen";

//Auth Screen imports
import { isLogged, isLoggedFalse, isLoggedTrue, HandleLogin } from "./Screens/Auth/Login";
import { isLoggedSignUp, SignUp } from "./Screens/Auth/SignUp";

//Manupulating Stack Navigation properties
const HomeStackNav  = createNativeStackNavigator();

//Creating Stack Navigation Component
export function HomeStack() {

//     //Login
//     const isLoggedInFalse = isLoggedFalse();
//    // console.log('from nav: ', isLoggedInFalse);

//     const isLoggedInTrue = isLoggedTrue();
//    // console.log('from nav: ', isLoggedInTrue);


    //SignUp
    // const isLoggedInSignUp = isLoggedSignUp();
    // console.log(isLoggedIn);

    let isLoggedIn = isLogged();
    console.log('isloggedin from nav: ', isLoggedIn);

    //const isLoggedIn = 'false';
    const isLoggedInSignUp = 'false';


    if (isLoggedIn != 'true' && isLoggedInSignUp === 'false') {
        return(
            <HomeStackNav.Navigator initialRouteName="HandleLogin">
            <HomeStackNav.Screen name="HandleLogin" component={HandleLogin} ></HomeStackNav.Screen>
            <HomeStackNav.Screen name="SignUp" component={SignUp}></HomeStackNav.Screen>
        </HomeStackNav.Navigator>
        )
    } else {
        return(
            <HomeStackNav.Navigator initialRouteName="HomeScreen">
                <HomeStackNav.Screen name="HomeScreen" component={HomeScreen} ></HomeStackNav.Screen>
                <HomeStackNav.Screen name="ProductsScreen" component={ProductsScreen}></HomeStackNav.Screen>
                <HomeStackNav.Screen name="SalesScreen" component={SalesScreen}></HomeStackNav.Screen>
                <HomeStackNav.Screen name="ClientsScreen" component={ClientsScreen}></HomeStackNav.Screen>
            </HomeStackNav.Navigator>
        )
    }
    
};


  // const RootTabs =  createBottomTabNavigator(); 

  // export function RootNavigation() {
  //   return (
  //       <RootTabs.Navigator initialRouteName="HomeScreen" options={{headerShown: false}}>
  //         <RootTabs.Screen name="HomeScreen" component={HomeStack} options={{headerShown: false}} />
  //         <RootTabs.Screen name="SettingsScreen" component={SettingsScreen} />
  //       </RootTabs.Navigator>
  //   );
  // }
  //options={{headerShown: false}}