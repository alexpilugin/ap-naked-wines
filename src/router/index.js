import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresGuest: true } //accessible for any Guests
  },
  {
    path: '/wine',
    name: 'Wine',
    component: () => import(/* webpackChunkName: "wine" */ '../views/Wine.vue'),
    meta: { requiresGuest: true } //accessible for any Guests
  },
  {
    path: '/angels',
    name: 'Angels',
    component: () => import(/* webpackChunkName: "angels" */ '../views/Angels.vue'),
    meta: { requiresAuth: true }, //accessible only for logged-in users
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue'),
    meta: { requiresGuest: true } //accessible for any Guests
  },
  {
    path: '/voucher',
    name: 'Voucher',
    component: () => import(/* webpackChunkName: "voucher" */ '../views/Voucher.vue'),
    meta: { requiresGuest: true } //accessible for any Guests
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: { requiresGuest: true } //accessible for any Guests
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const user = true; // get a user from somewhere

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      // Go to home
      next({
        path: '/',
        /* query: { redirect: to.fullPath } */
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Proceed to route (accessable for Guests)
    next();
  } else {
    // Proceed to route (without any meta data)
    next();
  }
});

export default router
