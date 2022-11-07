import { View, Text, Button, Alert } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from "expo-status-bar";

export function SalesScreen() {
  return (
    <View>
      <View style={{ margin: 15 }}>
        <Button title="Add Sale" onPress={() => Alert.alert("Adding Sale Modal Nav")} />
      </View>
      <View style={Styles.containerSales}>
        <Text style={Styles.Text}>Sales</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
