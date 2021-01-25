import API_RUNNER from "../API/API_RUNNER";
import React, { useState } from "react";

/*
  async prendiTutto() {
    const logo = await this.fetchLogo();
    const products = await this.fetchProducts();
    const productTaxonomies = await this.fetchProductTaxonomies();
    this.setState({
      logo: logo.data,
      products: products.data,
      product_taxonomies: productTaxonomies.data,
    });
  }
  async prendiTutto_2() {
    await Promise.all([
      this.fetchLogo(),
      this.fetchProducts(),
      this.fetchProductTaxonomies(),
    ]).then(([logo, prod, tax]) => {
      this.setState({
        logo: logo.data,
        products: prod.data,
        product_taxonomies: tax.data,
      });
    });
  }
  async prendiTutto_3() {
    const [logo, prod, tax] = await Promise.all([
      this.fetchLogo(),
      this.fetchProducts(),
      this.fetchProductTaxonomies(),
    ]);
    this.setState({
      logo: logo.data,
      products: prod.data.products,
      product_taxonomies: tax.data,
    });
  }
*/

// Business Logic. Pure, Testatble.
const fetchLogo = async () => await API_RUNNER.getLogo();
const fetchProducts = async () => await API_RUNNER.getAllProducts();
const fetchProductTaxonomies = async () => await API_RUNNER.getAllProductTaxonomies();

const parseData = ({ logo, prod, tax }) => {
  let new_data = {};

  // REQUESTS ARE ALL OK ???
  const requestAllOk = ((requests) => {
    const requestIsOk = (req) => {
      try {
        const ok = !!req.ok;
        if (!ok) {
          throw Error(req.problem);
        }
        return true; // EXIT returning true
      } catch (err) {
        return false; // EXIT returning false
      }
    };
    const oks = requests.map((req) => requestIsOk(req));
    return oks.filter((ok) => ok === true).length === oks.length;
  })([logo, prod, tax]);

  // IF ALL ARE OK PERSE NEW DATA FROM API RESPONSES..
  if (requestAllOk) {
    error = false;
    new_data.logoURI = logo.data.logo_src;
    new_data.products = prod.data.products;
    new_data.taxonomies = tax.data.taxonomies;
  } else {
    error = true;
  }

  return { ...new_data, error, isLoading: false };
};

// Implementation/framework logic, Encapsulating state and effects here
const usePersistentData = () => {
  const [state, setState] = useState({
    products: [],
    taxonomies: [],
    logoURI: false,
    isLoading: false,
    error: false,
  });
  const fetchData = async () => {
    setState({ ...state, isLoading: true });
    const [logo, prod, tax] = await Promise.all([
      fetchLogo(),
      fetchProducts(),
      fetchProductTaxonomies(),
    ]);
    setState(parseData({ logo, prod, tax }));
  };
  return { fetchData, ...state };
};

export default usePersistentData;
