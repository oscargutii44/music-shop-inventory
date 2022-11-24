import {
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Styles } from "../styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Box, Stack, NativeBaseProvider, Image, Text } from "native-base";
import app from "../db/firebaseConfig";
import { AddOrEditProduct } from "./Forms/AddOrEditProduct";

const db = getFirestore();
let editableProductId = "";

export function ProductsScreen() {
  const navigation = useNavigation();
  let [Data, setData] = useState([]);

  async function getProducts() {
    let res = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      res.push([doc.id, doc.data()]);
    });
    setData(res);
  }
  useEffect(() => {
    getProducts();
  }, []);

  const Delete = (id) => {
    Alert.alert(
      "Delete product",
      "¿Are you sure you want to delete the product?",
      [
        {
          text: "No",
        },
        {
          text: "Ok",
          onPress: async () => {
            await deleteProduct(id);
            await getProducts();
          },
        },
      ]
    );
  };

  async function deleteProduct(id) {
    await deleteDoc(doc(db, "products", id));
  }

  function productCard(product) {
    return (
      <View>
        <Box backgroundColor="powderblue" margin={3} borderRadius={10}>
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Image
              source={{
                uri: product[1].image,
              }}
              alt="example"
              size="xl"
              borderRadius={6}
              margin={3}
            />

            <Stack direction="column" width={150} space={5}>
              <Text bold>{product[1].brand}</Text>
              <Text>{product[1].model}</Text>
              <Text>{product[1].type}</Text>
              <Text>Price: ${product[1].price}</Text>
              <Text>Stock: {product[1].stock}</Text>
            </Stack>

            <Stack direction="column" space={2}>
              <TouchableOpacity onPress={() => Delete(product[0])}>
                <Image
                  source={require("../assets/delete.png")}
                  size="xs"
                  alt="delete"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  editableProductId = product[0];
                  setModalVisible(true);
                }}
              >
                <Image
                  source={require("../assets/edit.png")}
                  size="xs"
                  alt="edit"
                />
              </TouchableOpacity>
            </Stack>
          </Stack>
        </Box>
      </View>
    );
  }

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={{ margin: 15 }}>
          <Button
            title="Add product"
            onPress={() => navigation.navigate("AddOrEditProduct")}
          />
          <Text style={Styles.Title}>Products</Text>
        </View>

        {/* seems like we just can use one view
      <View style={Styles.containerFeed}>
        <Button title="Add product" onPress={() => Alert.alert("Adding Product Modal Nav")} />
        <Text style={Styles.Text}>'Products'</Text>
      </View> */}

        {Data.map((product, key) => {
          return productCard(product);
        })}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          editableProductId = "";
          getProducts();
        }}
      >
        <AddOrEditProduct id={editableProductId} />
      </Modal>
    </NativeBaseProvider>
  );
}
