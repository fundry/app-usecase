import Vue from "vue";
import VueRouter from "vue-router";

import {
    Login,
    CreateCase,
    Edit,
    Signup,
    Import,
    Profile,
    Cases
} from "./pages/";

Vue.use(VueRouter);

const auth = true;

const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: "/login", component: Login, name: "Login" },
        { path: "/signup", component: Signup, name: "Signup" },

        {
            path: "/",
            component: Cases,
            name: "Case",
            redirect: !auth ? "/login" : null
        },

        {
            path: "/create-case",
            component: CreateCase,
            name: "Create Case",
            redirect: !auth ? "/login" : null
        },
        {
            path: "/create-usecase",
            component: Edit,
            name: "Create Usecase",
            redirect: !auth ? "/login" : null
        },
        {
            path: "/import",
            component: Import,
            name: "Import",
            redirect: !auth ? "/login" : null
        },
        {
            path: "/profile",
            component: Profile,
            name: "Profile",
            redirect: !auth ? "/login" : null
        }
    ]
});

export default router;
