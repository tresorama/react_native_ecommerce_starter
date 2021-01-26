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
import { Text } from "native-base";

const ScreenProductLoop = ({ navigation }) => {
  // Get the global variables & functions via context
  const { products, taxonomies, error, isLoading, fetchData } = useContext(StoreContext);

  // use filter products functionalities.
  // declare here and pass down via props.
  // Doing this assure us that state is mantained
  // and filters active will be preserved on screen change.
  const _useFilterProducts = useFilterProducts(products, taxonomies);

  const renderLoadingSignal = () => <LoadingSignal />;
  const renderErrorRetry = () => (
    <ErrorRetry message="Unable to Fetch Data" onRetry={fetchData} />
  );
  const renderProductLoop = () => {
    return !products.length ? (
      <Text>Non ci sono prodotti da visualizzare!</Text>
    ) : (
      <ProductLoop
        _useFilterProducts={_useFilterProducts}
        onCardPress={({ id }) => navigation.navigate("ProductDetails", { id })}
      />
    );
  };

  return (
    <ScreenBlankSafe>
      {/* if API are fetching data show spinning loading */}
      {isLoading && renderLoadingSignal()}
      {/* if API has returned error show retry button */}
      {!isLoading && error && renderErrorRetry()}
      {/* if API response is ok, call useFilterProducts to controll filters on products */}
      {!isLoading && !error && renderProductLoop()}
    </ScreenBlankSafe>
  );
};
export default ScreenProductLoop;
