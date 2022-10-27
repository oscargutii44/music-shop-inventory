import { View, Text } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from 'expo-status-bar';

export function SalesScreen() {
    return (
        <View style={Styles.containerProfile}>
            <Text style={Styles.Text}>From 'Sales Screen'</Text>
            <StatusBar style="auto" />
        </View>
    );
  };