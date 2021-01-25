import API_CLIENT from "../API_CLIENT";
import ENDPOINTS from "../endpoints";
const { login, logout } = ENDPOINTS;

export const loginUser = (body) => API_CLIENT.post(login, body);
export const logoutUser = (body) => API_CLIENT.post(logout, body);
