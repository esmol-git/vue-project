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
        // baseURL: process.env.VUE_APP_API_URL ? process.env.VUE_APP_API_URL : "",
        baseURL: "https://jsonplaceholder.typicode.com",

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
    // return `${process.env.API_URL}/${url}${args.length > 0 ? '!'+args : ''}`
    return `${url}${args.length > 0 ? "?" + args : ""}`;
    // return `${url}/?format=json`
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
