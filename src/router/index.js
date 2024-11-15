import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import CategoryManagementComponent from "../publishing/pages/category-management.component.vue";
import SignInComponent from "../iam/pages/sign-in.component.vue";
import SignUpComponent from "../iam/pages/sign-up.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',                    name: 'home',       component: HomeComponent,               meta: { title: 'Home'} },
        { path: '/about',                   name: 'about',      component: AboutComponent,              meta: { title: 'About us'} },
        { path: '/publishing/categories',   name: 'categories', component: CategoryManagementComponent, meta: { title: 'Categories'}},
        { path: '/sign-in',                 name: 'sign-in',    component: SignInComponent,             meta: { title: 'Sign In'}},
        { path: '/sign-up',                 name: 'sign-up',    component: SignUpComponent,             meta: { title: 'Sign Up'}},
        { path: '/',                        redirect: '/home' }
    ]
});

router.beforeEach((to,
                   from,
                   next) => {
   let baseTitle = 'ACME Learning Center';
   document.title = `${baseTitle} | ${to.meta['title']}`;
   next();
});
export default router;