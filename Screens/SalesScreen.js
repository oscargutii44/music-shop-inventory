import { View, Text, Button, Alert, Pressable } from "react-native";
import { Styles } from "../styles";
import { StatusBar } from "expo-status-bar";
import { ScreenContainer } from "react-native-screens";

export function SalesScreen() {
  return (
    // <View>
    //   <View style={{ margin: 15 }}>
    //     <Button title="Add Sale" onPress={() => Alert.alert("Adding Sale Modal Nav")} />
    //   </View>
    //   <View style={Styles.containerSales}>
    //     <Text style={Styles.Text}>Sales</Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </View>

    <View style={Styles.containerSales}>
      <Button title="Add Sale" onPress={() => Alert.alert("Adding Sale Modal Nav")} />
      <Text style={Styles.Text}>Sales</Text>
    <StatusBar style="auto" />
  </View>

  );
}
