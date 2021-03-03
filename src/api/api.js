import axios from "axios";
import Vue from "vue";

class Api {
  getUrl(uri) {
    let baseUrl = process.env.VUE_APP_API_URL;

    return baseUrl + uri;
  }

  async get(uri, data = null, protect = false) {
    return this.request(
      async (_uri, _data) =>
        axios.get(this.getUrl(_uri), {
          params: _data
        }),
      uri,
      data,
      protect
    );
  }

  async post(uri, data = null, protect = false) {
    return this.request(
      async (_uri, _data) => axios.post(this.getUrl(_uri), _data),
      uri,
      data,
      protect
    );
  }

  async postFile(uri, data = null, protect = false) {
    return this.request(
      async (_uri, _data) =>
        axios.post(this.getUrl(_uri), _data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }),
      uri,
      data,
      protect
    );
  }

  async request(func, uri, data = null) {
    let response = {};

    try {
      response = await func(uri, data);
    } catch (err) {
      Vue.prototype.$notifier.showMessage(err, "error");
    }

    return response.data || {};
  }
}

export default Api;
