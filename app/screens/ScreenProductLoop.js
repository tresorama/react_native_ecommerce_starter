import React, { useContext } from "react";

// GLOBAL STATE ....
import StoreContext from "../AppContext/StoreContext";
// HOOKS ...
import useFilterProducts from "../hooks/useFilterProducts";
// SCREENS ...
import ScreenBlankSafe from "./ScreenBlankSafe";
// COMPONENTS ...
import LoadingSignal from "../components/LoadingSignal";
import ErrorRetry from "../components/ErrorRetry";
import ProductLoop from "../components/ProductLoop";

const ScreenProductLoop = ({ navigation }) => {
  // Get the global variables & functions via context
  const { products, taxonomies, error, isLoading, fetchData } = useContext(StoreContext);

  return (
    <ScreenBlankSafe>
      {/* if API are fetching data show spinning loading */}
      {isLoading && <LoadingSignal />}
      {/* if API has returned error show retry button */}
      {!isLoading && error && (
        <ErrorRetry message="Unable to Fetch Data" onRetry={fetchData} />
      )}
      {/* if API response is ok, call useFilterProducts to controll filters on products */}
      {!isLoading && !error && products.length && (
        <ProductLoop
          useFilterProductsData={useFilterProducts(products, taxonomies)}
          onCardPress={({ id }) => navigation.navigate("ProductDetails", { id })}
        />
      )}
    </ScreenBlankSafe>
  );
};
export default ScreenProductLoop;
