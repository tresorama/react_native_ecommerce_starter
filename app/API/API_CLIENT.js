import { create } from "apisauce";

const API_CLIENT = create({
  baseURL: "http://pipocasfinale.local/wp-json",
});

export default API_CLIENT;
