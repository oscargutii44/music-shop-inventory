import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";
import { Styles } from "../../styles";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import app from "../../db/firebaseConfig";

export function AddOrEditProduct() {
  const navigation = useNavigation();

  const db = getFirestore();

  const [product, setProduct] = useState({
    type: "",
    brand: "",
    model: "",
    price: 0,
    stock: 0,
  });

  const changeText = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  const AddProduct = () => {
    let i = 0;
    if (product.name === "" || product.desc === "") {
      Alert.alert("Campo vacío");
    } else if (product.desc === "") {
      Alert.alert("Campo vacío");
    } else {
      onSend(product);
      Alert.alert("Product registered");
      navigation.navigate("ProductsScreen");
    }
  };

  const onSend = async () => {
    const docRef = await addDoc(collection(db, "products/"), product);
  };

  return (
    <NativeBaseProvider>
      <View style={Styles.container}>
        <View style={Styles.Middle}>
          <Text style={Styles.Title}>Product</Text>
        </View>
        <View style={Styles.form}>
          <Text>Type</Text>
          <Input
            variant="outline"
            placeholder="Product type"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("type", value)}
          />
        </View>

        <View style={Styles.form}>
          <Text>Brand</Text>
          <Input
            variant="outline"
            placeholder="Product brand"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("brand", value)}
          />
        </View>

        <View style={Styles.form}>
          <Text>Model</Text>
          <Input
            variant="outline"
            placeholder="Product model"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("model", value)}
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
            onChangeText={(value) => changeText("price", value)}
          />
        </View>

        <View style={Styles.form}>
          <Text>Stock</Text>
          <Input
            variant="outline"
            placeholder="Product stock"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("stock", value)}
          />
        </View>

        <View style={Styles.buttonStyle}>
          <Button style={Styles.buttonDesign} onPress={() => AddProduct()}>
            <Text style={Styles.buttonText}>Add product</Text>
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
