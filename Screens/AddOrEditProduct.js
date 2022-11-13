import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";
import { Styles } from "../styles";

export function AddOrEditProduct() {
  return (
    <NativeBaseProvider>
      <View style={Styles.container}>
        <View style={Styles.Middle}>
          <Text style={Styles.Title}>New product</Text>
        </View>
        <View style={Styles.form}>
          <Text>Name</Text>
          <Input
            variant="outline"
            placeholder="Nombre del producto"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>

        <View style={Styles.form}>
          <Text>Description</Text>
          <Input
            variant="outline"
            placeholder="Product description"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <View style={Styles.form}>
          <Text>Price</Text>
          <Input
            variant="outline"
            placeholder="Product sale price"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <View style={Styles.buttonStyle}>
          <Button style={Styles.buttonDesign}>Add product</Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
