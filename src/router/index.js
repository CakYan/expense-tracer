import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import("../view/Login.vue")
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import("../view/Home.vue"),
        meta: {
            requiresAuth: true,
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    // to and from are both route objects. must call `next`.
    if(to.meta.requiresAuth && !window.user){
        return {name: 'Login', query: { redirect: to.fullPath}}
    }
})

export default router;