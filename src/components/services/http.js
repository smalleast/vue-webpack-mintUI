import axios from 'axios';
import Interceptors from './interceptors';
import config from './config'
class Http {

  static initDefaults() {
    axios.defaults.baseURL = 'http://testapp.dcpai.cn/';
    axios.defaults.timeout = 2500;
    //axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  static initRequestInterceptor() {
    axios.interceptors.request.use(Interceptors.requestSuccess, Interceptors.requestError)
  }

  static initResponseInterceptor() {
    axios.interceptors.response.use(Interceptors.responseSuccess, Interceptors.responseError);
  }

  static post(inName, inData) {
    return axios.post(`/${inName}`, inData, config);
  }

  static get(inName, inData) {
    return axios.get(`/${inName}`, inData, config);
  }
}

//intial configs:
Http.initDefaults();
Http.initRequestInterceptor();
Http.initResponseInterceptor();

export default Http;
