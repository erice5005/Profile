const HomeView = () => import('../views/HomeView.vue')
// const Robots = () => import('../../public/robots.txt')
export const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    //   component: import(/* webpackChunkName: "home" */'../views/HomeView.vue')
    },
    // {
    //   path: '/robots.txt',
    //   name: 'robots.txt',
    //   component: import(/* webpackChunkName: "robots" */'/robots.txt')
    // }, 
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ];
