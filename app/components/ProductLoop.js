import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// HOOKS ...
import useModal from "../hooks/useModal";

// COMPONENTS ...
import AppButton from "./AppButton";
import ProductCard from "./ProductCard";

// THEME ...
import colors from "../theme/colors";

const FiltersActiveSummary = ({ filtersActive }) => {
  return (
    <View>
      <Text>{filtersActive.length > 0 ? "FILTRI ATTIVI" : "NESSUN FILTRO ATTIVO"}</Text>
      {filtersActive.map((f, i) => {
        const { name } = f.renderOptions;
        return <Text key={i}>{name}</Text>;
      })}
    </View>
  );
};

const FilterModal = ({
  filters,
  filtersActive,
  addFilter,
  removeFilter,
  opened,
  onApplyPress = () => {},
  onResetPress = () => {},
}) => {
  if (!opened) return null;
  return (
    <View style={styles.filtersModal.wrapper}>
      <FiltersActiveSummary filtersActive={filtersActive} />
      <Text>Filtra Per</Text>
      {filters.map((f, i) => {
        const { name } = f.renderOptions;
        const { isActive, count } = f.renderOptions.live;

        if (count === 0) return null;
        // if no product could match the filter hide it...

        return (
          <Button
            key={i}
            title={`${isActive ? "rem" : "add"} - ${name} (${count})`}
            onPress={() => (isActive ? removeFilter(f) : addFilter(f))}
          />
        );
      })}
      <AppButton
        title={filtersActive.length > 0 ? "Applica" : "Chiudi"}
        onPress={onApplyPress}
      />
      {filtersActive.length > 0 && <AppButton title={"Azzera"} onPress={onResetPress} />}
    </View>
  );
};

const FiltersStatusBar = ({ showed, filtersActive, onFiltersPress }) => {
  if (!showed) return null;
  return (
    <View style={styles.statusBar.wrapper}>
      <AppButton
        title={`FILTRI (${filtersActive.length})`}
        onPress={onFiltersPress}
        mode="dark"
      />
    </View>
  );
};

const ProductsGrid = ({ products, onCardPress }) => (
  <>
    <Text>{`Visualizzati ${products.length}`}</Text>
    <View style={styles.productsGrid.wrapper}>
      {products.map((p, i) => (
        <ProductCard key={i} product={p} onPress={() => onCardPress(p)} />
      ))}
    </View>
  </>
);

export default ({ useFilterProductsData, onCardPress }) => {
  const filtersModal = useModal(); // { isOpened, toggle(), open(), close() }

  return (
    <>
      <ScrollView>
        <ProductsGrid {...useFilterProductsData} onCardPress={onCardPress} />
      </ScrollView>
      <FilterModal
        {...useFilterProductsData}
        opened={filtersModal.isOpened}
        onApplyPress={() => filtersModal.close()}
        onResetPress={() => {
          useFilterProductsData.resetFilters();
          filtersModal.close();
        }}
      />
      <FiltersStatusBar
        {...useFilterProductsData}
        showed={!filtersModal.isOpened}
        onFiltersPress={() => filtersModal.toggle()}
      />
    </>
  );
};
const styles = {
  // PRODUCTS GRID
  productsGrid: StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  }),
  // FILTER MODAL
  filtersModal: StyleSheet.create({
    wrapper: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: colors.screenBackground,
    },
  }),
  // FILTER STATUS BAR
  statusBar: StyleSheet.create({
    wrapper: {
      position: "absolute",
      bottom: 50,
      alignSelf: "center",
      flexDirection: "row",
    },
  }),
};
