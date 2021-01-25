import React, { useContext } from "react";

// STATE ...
import StoreContext from "../AppContext/StoreContext";
// SCREENS ...
import ScreenBlankSafe from "./ScreenBlankSafe";
// COMPONENTS ...
import ProductDetails from "../components/ProductDetails";

const ScreenProductDetails = ({ navigation, route }) => {
  // Get the global variables & functions via AppContext
  const { products, taxonomies, error, isLoading, fetchData } = useContext(StoreContext);

  // get params to grap wanted product
  const { params } = route;
  const { id = null } = params;

  // TO REMOVE...
  if (null === id) navigation.goBack();

  // retrieve product data
  const product = products.find((p) => p.id === id);

  return (
    <ScreenBlankSafe>
      <ProductDetails product={product} />
    </ScreenBlankSafe>
  );
};
export default ScreenProductDetails;
