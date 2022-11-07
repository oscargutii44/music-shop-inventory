import { View, Text } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from 'expo-status-bar';

export function ClientsScreen() {
    return (
        <View style={Styles.containerClients}>
            <Text style={Styles.Text}>Clients</Text>
            <StatusBar style="auto" />
        </View>
    );
  };