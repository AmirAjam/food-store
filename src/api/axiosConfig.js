import axios from "axios";
import store from "@/store";
import { setAccessToken, logout } from "@/store/authSlice";

const axiosInstance = axios.create({
  baseURL: "https://tarkhineh-api.liara.run/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "https://tarkhineh-api.liara.run/api/auth/refresh-token",
          {},
          { withCredentials: true }
        );

        const newAccessToken = res.data.accessToken;

        store.dispatch(setAccessToken(newAccessToken));
        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        store.dispatch(logout());
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
