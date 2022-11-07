import { View, Text, Button, Alert } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from "expo-status-bar";

export function ProductsScreen() {
  return (
    <View>
      <View style={{ margin: 15 }}>
        <Button title="Add product" onPress={() => Alert.alert("Adding Product Modal Nav")} />
        <Text style={Styles.Text}>Products</Text>
      </View>

      
      {/* seems like we just can use one view
      <View style={Styles.containerFeed}>
        <Button title="Add product" onPress={() => Alert.alert("Adding Product Modal Nav")} />
        <Text style={Styles.Text}>'Products'</Text>
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}
