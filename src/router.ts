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
    List, Explore
} from "./pages/";

Vue.use(VueRouter);

const auth: boolean = true;

// @ts-ignore
const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/login", component: Login, name: "Login" },
        { path: "/signup", component: Signup, name: "Signup" },
        {
            path: "/explore",
            component: Explore,
            name: "Explore",
            // @ts-ignore
            redirect: !auth ? "/login" : null
        },

        {
            path: "/",
            component: List,
            name: "List",
            // @ts-ignore
            redirect: !auth ? "/login" : null
        },

        {
            path: "/create",
            component: CreateCase,
            name: "Create",
            // @ts-ignore
            redirect: !auth ? "/login" : null
        },
        {
            path: "/case",
            component: Case,
            name: "Case",
            // @ts-ignore
            redirect: !auth ? "/login" : null
        },
        {
            path: "/create-usecase",
            component: Edit,
            name: "Create Usecase",
            // @ts-ignore
            redirect: !auth ? "/login" : null
        },
        {
            path: "/import",
            component: Import,
            name: "Import",
            // @ts-ignore
            redirect: !auth ? "/login" : null
        },
        {
            path: "/profile",
            component: Profile,
            name: "Profile",
            // @ts-ignore
            redirect: !auth ? "/login" : null
        }
    ]
});

export default router;
