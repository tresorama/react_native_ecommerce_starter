import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

const ProductCard = ({ product = {}, onPress = () => {} }) => {
  const renderName = () => {
    return <Text>{product.name}</Text>;
  };
  const renderPrice = () => {
    return <Text>€ {product.price_active}</Text>;
  };
  const renderImage = () => {
    const { all_images_uri = [] } = product;
    const style = styles.image;
    const source =
      all_images_uri[0] == "placeholder"
        ? require("../assets/placeholder.png")
        : {
            uri: all_images_uri[0],
          };
    return <Image source={source} style={style} resizeMode={"cover"} />;
  };
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.inner}>
        <View style={styles.imageWrapper}>{renderImage()}</View>
        <View style={styles.details}>
          {renderName()}
          {renderPrice()}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "50%",
    height: 300,
    padding: 10,
  },
  inner: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  imageWrapper: {
    flex: 0.9,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsWrapper: {
    flex: 0.1,
  },
});

export default ProductCard;
