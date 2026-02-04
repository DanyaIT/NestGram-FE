import axios, { AxiosError, AxiosResponse } from "axios";
import { getBaseUrl } from "../utils";

const api = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
});

let refreshPromise: Promise<AxiosResponse> | null = null;

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const status = err.response?.status;

    if (status === 403) {
      window.location.href = "/auth/signin";
      return Promise.reject("The user is blocked");
    }

    if (status === 401) {
      if (!refreshPromise) {
        refreshPromise = api.post("/auth/refresh");
      }

      try {
        await refreshPromise;
        if (err.config) {
          return await api(err.config);
        }

        throw err;
      } catch (e) {
        window.location.href = "/auth/signin";
        return Promise.reject(e);
      } finally {
        refreshPromise = null;
      }
    }

    return Promise.reject(err);
  },
);

export { api };
