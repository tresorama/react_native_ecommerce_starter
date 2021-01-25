import API_CLIENT from "../API_CLIENT";
import ENDPOINTS from "../endpoints";
const { get_logo } = ENDPOINTS;

export const getLogo = () => API_CLIENT.get(get_logo);
