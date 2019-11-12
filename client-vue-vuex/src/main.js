import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { store } from './store/store'
import vuetify from './plugins/vuetify';
import AsyncComputed from 'vue-async-computed';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(AsyncComputed);

const router = new VueRouter({routes: routes});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
