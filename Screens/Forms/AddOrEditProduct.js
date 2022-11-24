import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";
import { Styles } from "../../styles";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import app from "../../db/firebaseConfig";

export function AddOrEditProduct(props) {
  const navigation = useNavigation();

  const db = getFirestore();

  const [product, setProduct] = useState({
    brand: "",
    image: "",
    model: "",
    price: "0",
    stock: "0",
    type: "",
  });

  let buttonText;

  if (props.id === undefined) {
    buttonText = "Add product";
  } else {
    buttonText = "Edit product";
    useEffect(() => {
      GetProduct(props.id);
    }, []);
  }

  const changeText = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  const AddProduct = () => {
    onSend(product);
    Alert.alert("Product registered");
    navigation.navigate("ProductsScreen");
  };

  async function GetProduct(id) {
    const docSnap = await getDoc(doc(db, "products", id));
    setProduct(docSnap.data());
  }

  const EditProduct = async (id) => {
    await setDoc(doc(db, "products", id.id), {
      type: product.type,
      brand: product.brand,
      model: product.model,
      price: product.price,
      stock: product.stock,
      image: product.image,
    });
    Alert.alert("Product edited");
  };

  const onSend = async () => {
    const docRef = await addDoc(collection(db, "products/"), product);
  };

  function AddOrEditButton(id) {
    return (
      <Button
        style={Styles.buttonDesign}
        onPress={() => {
          if (buttonText === "Add product") {
            AddProduct();
          } else {
            EditProduct(id);
          }
        }}
      >
        <Text style={Styles.buttonText}>{buttonText}</Text>
      </Button>
    );
  }

  return (
    <NativeBaseProvider>
      <View style={Styles.container}>
        <View style={Styles.Middle}>
          <Text style={Styles.Title}>{product.model}</Text>
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

        <View style={Styles.form}>
          <Text>Image</Text>
          <Input
            variant="outline"
            placeholder="Image url of the product"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("image", value)}
          />
        </View>
        <View style={Styles.form}>
          <AddOrEditButton id={props.id} />
        </View>
      </View>
    </NativeBaseProvider>
  );
}
