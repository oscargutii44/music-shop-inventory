import { View, Text, Button } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {

    const navigation =  useNavigation();

    return (
        <View style={Styles.containerHome}>
            <Text style={Styles.Text}>Home</Text>
            <Button title="Go to Products" onPress={() => navigation.navigate("ProductsScreen")}></Button>
            <Button title="Go to Sales" onPress={() => navigation.navigate("SalesScreen")}></Button>
            <Button title="Go to Clients" onPress={() => navigation.navigate("ClientsScreen")}></Button>

            <StatusBar style="auto" />
        </View>
    );
  };

//With Arrow Function
// export const HomeScreen = () => {
//         return (
//         <View style={Styles.containerHome}>
//             <Text style={Styles.Text}>From 'HomeScreen'</Text>
//             <StatusBar style="auto" />
//         </View>
//     );
// }
  
