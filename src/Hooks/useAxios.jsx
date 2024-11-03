import axios from "axios";

const axiosNonSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  return axiosNonSecure;
};

export default useAxios;
