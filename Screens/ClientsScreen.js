import { View, Text } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from 'expo-status-bar';

export function ClientsScreen() {
    return (
        <View style={Styles.containerSettings}>
            <Text style={Styles.Text}>From 'Clients Screen'</Text>
            <StatusBar style="auto" />
        </View>
    );
  };