import Vue from 'vue';
import VueRouter from 'vue-router';
import Employees from '../views/employees/Employees.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'Employees',
  component: Employees,
}];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
