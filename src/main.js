import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
import vuetify from './plugins/vuetify';
//import * as firebaseConfig from './firebaseConfig';

Vue.config.productionTip = false;
const firebaseKey = {
  apiKey: "AIzaSyBGJCwXQi36yFK2q9WP8Y_dqiK1_G4WrlQ",
  authDomain: "reerishun-dae85.firebaseapp.com",
  databaseURL: "https://reerishun-dae85.firebaseio.com",
  projectId: "reerishun-dae85",
  storageBucket: "reerishun-dae85.appspot.com",
  messagingSenderId: "12229890240",
  appId: "1:12229890240:web:26a79e7745822c5db01d25",
  measurementId: "G-3P44VHGBS3"
};

// Initialize Firebase
firebase.initializeApp(firebaseKey);
firebase.analytics();


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
