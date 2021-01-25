import React, { useState } from "react";
import { isArray } from "../js-helpers/getTypeOf";

/* =================================================== 
      Business Logic. Pure, Testatble
=================================================== */
// Match a PRODUCT against a FILTER,
// return true if match, false if not
const Find = (key, value, tester) => {
  if (tester[key] === String(value)) {
    return true;
  }
  if (isArray(tester[key])) {
    return tester[key].filter((t) => String(t) === String(value)).length > 0;
  }
  return false;
};
// Match two FILTER , return if key,value are same
const TwoFiltersAreEqual = (f1, f2) => f1.key === f2.key && f1.value === f2.value;

// Build FILTERS_STORE
const BuildFiltersStore = (taxonomies_store) => {
  let filters = [];
  // foreach taxonomy ....
  taxonomies_store.forEach((tax) => {
    const { tax_name, terms = [] } = tax;
    // foreach this taxonomy terms build a filter...
    terms.forEach((term) => {
      filters.push({
        key: "taxonomy_term_ids",
        value: term.id,
        renderOptions: {
          live: {
            isActive: false,
            count: term.count,
          },
          taxonomy_name: tax_name,
          name: term.name,
          id: term.id,
          count: term.count,
          parent: term.parent,
        },
      });
    });
  });
  return filters;
};

// update FILTERS with live data
const UpdateFilters = (filters_store, products_new, filtersActive) => {
  // cloned filters_store
  let filters_new = [...filters_store];

  // update filter property
  filters_new = filters_new.map((f) => {
    // f => renderOptions => live => count (product that match it)
    const count = [...products_new].filter((p) => Find(f.key, f.value, p)).length;
    // f => renderOptions => live => isActive
    const isActive = !![...filtersActive].find((f2) => TwoFiltersAreEqual(f, f2));
    // rebuild
    const live_new = { ...f.renderOptions.live, count, isActive };
    return { ...f, renderOptions: { ...f.renderOptions, live: live_new } };
  });

  return filters_new;
};
// Update FILTERS_ACTIVE
const UpdateFiltersActive = (action, activeFilters, filterData) => {
  // clone active filters
  let activeFilters_new = [...activeFilters];

  if (action === "add") {
    // push new filter
    activeFilters_new.push(filterData);
  } else if (action === "remove") {
    // remove filter
    activeFilters_new = activeFilters_new.filter((f) => {
      return !TwoFiltersAreEqual(f, filterData);
    });
  } else if (action === "reset") {
    // reset filters
    activeFilters_new = [];
  }

  return activeFilters_new;
};
// Update PRODUCTS
const UpdateProductsToShow = (activeFilters, products_store) => {
  // clone products_store
  let products = [...products_store];

  // Get ONLY ITEMS WITH THIS KEY VALUE PAIR IN PROPERTY ( AND )
  activeFilters.forEach((filterData) => {
    const { key, value } = filterData;
    products = products.filter((_p) => {
      return Find(key, value, _p);
    });
  });
  // ORDER ITEMS
  products = OrderProductsToShow(products);

  return products;
};
const OrderProductsToShow = (products) => {
  return products;
};

/* =================================================== 
      Implementation/framework logic, 
      Encapsulating state and effects here
=================================================== */
const useFilterProducts = (products_store = [], taxonomies_store = []) => {
  const getDefault = () => {
    const filters_store = BuildFiltersStore(taxonomies_store);
    return {
      products_store: products_store,
      products: products_store,
      taxonomies_store: taxonomies_store,
      filters_store: filters_store,
      filters: filters_store,
      filtersActive: [],
    };
  };
  const [state, setState] = useState(getDefault);

  const addFilter = (filterData) => {
    const { products_store, filters_store, filtersActive } = state;

    // build updated filtersActive
    const filtersActive_new = UpdateFiltersActive("add", filtersActive, filterData);

    //calculate new products with updated filters
    const products_new = UpdateProductsToShow(filtersActive_new, products_store);

    //build updated filter
    const filters_new = UpdateFilters(filters_store, products_new, filtersActive_new);

    // set state
    setState({
      ...state,
      products: products_new,
      filters: filters_new,
      filtersActive: filtersActive_new,
    });
  };
  const removeFilter = (filterData) => {
    const { products_store, filters_store, filtersActive } = state;

    // build updated filtersActive
    const filtersActive_new = UpdateFiltersActive("remove", filtersActive, filterData);

    // calculate new products with updated filters
    const products_new = UpdateProductsToShow(filtersActive_new, products_store);

    //build updated filter
    const filters_new = UpdateFilters(filters_store, products_new, filtersActive_new);

    // set state
    setState({
      ...state,
      products: products_new,
      filters: filters_new,
      filtersActive: filtersActive_new,
    });
  };
  const resetFilters = () => {
    const { products_store, filters_store, filtersActive } = state;

    // build updated filtersActive
    const filtersActive_new = UpdateFiltersActive("reset", filtersActive);

    //calculate new products with updated filters
    const products_new = UpdateProductsToShow(filtersActive_new, products_store);

    //build updated filter
    const filters_new = UpdateFilters(filters_store, products_new, filtersActive_new);

    // set state
    setState({
      ...state,
      products: products_new,
      filters: filters_new,
      filtersActive: filtersActive_new,
    });
  };

  return {
    products: state.products,
    filters: state.filters,
    filtersActive: state.filtersActive,
    addFilter,
    removeFilter,
    resetFilters,
  };
};

export default useFilterProducts;
