import Home from './components/Home.vue';
import Config from './components/config/Config.vue';
import Dashboard from './components/dashboard/Dashboard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/config', component: Config },
    { path: '/dashboard', component: Dashboard }
];

export default routes;
