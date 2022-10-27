import { View, Text, Button } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from "expo-status-bar";

export function ProductsScreen() {
  return (
    <View>
      <View style={{ margin: 15 }}>
        <Button title="Add product" onPress={() => Alert.alert("Product")} />
      </View>
      <View style={Styles.containerFeed}>
        <Text style={Styles.Text}>From 'Products Screen'</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
