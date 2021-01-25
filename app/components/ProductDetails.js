import React from "react";
import { Text } from "react-native";

const ProductDetails = ({ product }) => {
  return <Text>Details - {product.name}</Text>;
};

export default ProductDetails;
