import axios from "axios";

const axiosNonSecure = axios.create({
  baseURL: "https://flavorhuttserver.vercel.app",
});
const useAxios = () => {
  return axiosNonSecure;
};

export default useAxios;
