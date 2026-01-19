import axios from "axios";
import { getBaseUrl } from "./utils";

export default axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
});
