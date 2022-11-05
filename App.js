import { NavigationContainer  } from "@react-navigation/native";

//Screens
import { MainScreen } from './Screens/MainScreen';
import { ClientsScreen } from './Screens/ClientsScreen';
import { ProductsScreen } from './Screens/ProductsScreen';
import { SalesScreen } from "./Screens/SalesScreen";

//Auth Screens
import { Login } from "./Screens/Auth/Login";
import { SignUp } from "./Screens/Auth/SignUp";

//Main Navigation App
import { HomeStack } from "./Navigation";

//Main App
export default function App() {
  return (
    <NavigationContainer>{<HomeStack />}</NavigationContainer>
  );
}