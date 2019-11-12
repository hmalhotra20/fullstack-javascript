import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ourRoutes from './routes';
import AsyncComputed from 'vue-async-computed';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(AsyncComputed);

const router = new VueRouter({routes: ourRoutes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
