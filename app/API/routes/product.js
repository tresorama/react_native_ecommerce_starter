import API_CLIENT from "../API_CLIENT";
import ENDPOINTS from "../endpoints";
const { get_all_product_taxonomies, get_all_products } = ENDPOINTS;

export const getAllProducts = () => API_CLIENT.get(get_all_products);
export const getAllProductTaxonomies = () => API_CLIENT.get(get_all_product_taxonomies);
