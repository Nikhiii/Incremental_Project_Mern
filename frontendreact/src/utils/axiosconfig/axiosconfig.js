import axios from "axios";

const baseURL = "http://localhost:8080";

const urlParams = new URLSearchParams(window.location.search);

// const handleInvalidToken = (message) => {
//   localStorage.clear();

//   showToasterMessageForInvalidToken(message);

//   setTimeout(() => {
//     window.location.href = process.env.REACT_APP_SSO_URL;
//   }, 1000);
// };

const axiosInstance = axios.create({
  baseURL,
  timeout: 60 * 1000,
});

export { axiosInstance };
