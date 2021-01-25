import { getLogo } from "./routes/logo";
import { getAllProducts, getAllProductTaxonomies } from "./routes/product";
import { loginUser, logoutUser } from "./routes/user";

const API_RUNNER = {
  getLogo,
  getAllProducts,
  getAllProductTaxonomies,
  loginUser,
  logoutUser,
};

export default API_RUNNER;
