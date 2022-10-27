import { NavigationContainer  } from "@react-navigation/native";

//Views
import { MainScreen } from './Screens/MainScreen';
import { ClientsScreen } from './Screens/ClientsScreen';
import { ProductsScreen } from './Screens/ProductsScreen';
import { SalesScreen } from "./Screens/SalesScreen";

//APP
import { HomeStack } from "./Navigation";

//Main App
export default function App() {
  return (
    <NavigationContainer>{<HomeStack />}</NavigationContainer>
  );
}