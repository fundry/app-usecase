import Vue from "vue";
import VueRouter from "vue-router";

import {
    Login,
    CreateCase,
    Edit,
    Signup,
    Import,
    Profile,
    Case,
    List
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
            component: List,
            name: "List",
            redirect: !auth ? "/login" : null
        },

        {
            path: "/create",
            component: CreateCase,
            name: "Create",
            redirect: !auth ? "/login" : null
        },
        {
            path: "/case",
            component: Case,
            name: "Case",
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
