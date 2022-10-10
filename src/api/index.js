import Axios from "axios";
import { BACKEND_ENDPOINTS } from "./api.config";

class ApiClientClass {
  constructor(options = {}) {
    this.defaultHeaders = options.headers || {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "X-CSRFToken": "mr9yt(jh25#3_hm$c-b)@01f8an#q!io7i#9pm&4g@&t-&zh@a",
      "Accept-Language": "en-US",
      // Accept-Language: fr-CH
    };
    this.client =
      options.client ||
      Axios.create({
        baseURL: import.meta.env.VITE_APP_API_URL
          ? import.meta.env.VITE_APP_API_URL
          : "",
        // baseURL: "https://jsonplaceholder.typicode.com",

        headers: this.defaultHeaders,
      });
    // Подготовка запроса для авторизованных пользователей
    this.client.interceptors.request.use(
      (config) => {
        if (!localStorage.getItem("token")) {
          return config;
        }
        const newHeadres = {
          ...this.defaultHeaders,
          Authorization: `Token ${localStorage.getItem("token")}`,
        };
        return {
          ...config,
          headers: newHeadres,
        };
      },
      (e) => Promise.reject(e)
    );
  }

  urlFormat(url, args) {
    const argString = Object.keys(args)
      .map((el) => {
        return `${args[el]}`;
      })
      .join();
    return `${url}${argString !== "" ? "/" + argString : ""}`;
  }
}
export default new Proxy(new ApiClientClass(), {
  get: function (target, name) {
    if (BACKEND_ENDPOINTS[name] !== undefined) {
      return ({ params = {}, data = {}, args = {} } = {}) => {
        return target
          .client({
            method: BACKEND_ENDPOINTS[name].method,
            url: target.urlFormat(BACKEND_ENDPOINTS[name].url, args),
            data: data,
            params: params,
          })
          .then((serverResponse) => {
            return serverResponse.data;
          })
          .catch((error) => {
            throw new Error("server response error:" + error);
          });
      };
    } else {
      return target[name];
    }
  },
});
