//Navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screen imports
import { HomeScreen } from "./Screens/HomeScreen";
import { ClientsScreen } from "./Screens/ClientsScreen";
import { ProductsScreen } from "./Screens/ProductsScreen";
import { SalesScreen } from "./Screens/SalesScreen";
import { AddOrEditProduct } from "./Screens/Forms/AddOrEditProduct";

//Auth Screen imports
import { Login } from "./Screens/Auth/Login";
import { SignUp } from "./Screens/Auth/SignUp";

//Manupulating Stack Navigation properties
const HomeStackNav = createNativeStackNavigator();

//Creating Stack Navigation Component
export function HomeStack() {
  return (
    <HomeStackNav.Navigator initialRouteName="HomeScreen">
      <HomeStackNav.Screen
        name="HomeScreen"
        component={HomeScreen}
      ></HomeStackNav.Screen>
      <HomeStackNav.Screen
        name="ProductsScreen"
        component={ProductsScreen}
      ></HomeStackNav.Screen>
      <HomeStackNav.Screen
        name="SalesScreen"
        component={SalesScreen}
      ></HomeStackNav.Screen>
      <HomeStackNav.Screen
        name="ClientsScreen"
        component={ClientsScreen}
      ></HomeStackNav.Screen>
      <HomeStackNav.Screen
        name="AddOrEditProduct"
        component={AddOrEditProduct}
      ></HomeStackNav.Screen>
    </HomeStackNav.Navigator>
  );
}

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
