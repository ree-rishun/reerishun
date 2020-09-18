import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
import vuetify from './plugins/vuetify';
import * as firebaseConfig from './firebaseConfig';

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig.firebaseKey);
firebase.analytics();


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
