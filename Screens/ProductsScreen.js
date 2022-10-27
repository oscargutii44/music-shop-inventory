import { View, Text } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from 'expo-status-bar';

export function ProductsScreen() {
    return (
        <View style={Styles.containerFeed}>
            <Text style={Styles.Text}>From 'Products Screen'</Text>
            <StatusBar style="auto" />
        </View>
    );
  };