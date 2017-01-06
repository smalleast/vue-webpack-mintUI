import Vue from 'vue';
import Mint from 'mint-ui';
import "mint-ui/lib/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import baiduLogo from 'assets/images/bd_logo1_31bdc765.png';
import App from './views/app.vue';
Vue.use(Mint);
console.log('home -> index.js',baiduLogo);
new Vue({
  el: '#home-app',
  template: '<App />',
  components: {
    App
  }
});
