import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import colors from "../theme/colors";

const ListItem = ({ title, subTitle, image, onPress = () => {} }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={otherStyles.underlayColor}>
      <View style={styles.listItem}>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} resizeMode={"cover"} />
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};
export default ({ items, onItemPress }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index, separators }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => onItemPress(item)}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    ></FlatList>
  );
};

const otherStyles = {
  underlayColor: "red",
};
const styles = StyleSheet.create({
  listItem: {
    height: 50,
    flexDirection: "row",
    padding: 10,
  },
  imageWrapper: {
    flexBasis: 50,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsWrapper: {
    flex: 1,
  },
  title: {},
  subtitle: {},
  separator: {
    // width: "100%",
    height: 1,
    backgroundColor: colors.lightgrey,
  },
});
