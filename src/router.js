import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home";
import Run from "./components/Run";
import Runs from "./components/Runs";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/runs",
        name: "Runs",
        component: Runs,
    },
    {
        path: "/runs/:id",
        name: "Run",
        component: Run,
    },
    {
        path: "/analyses",
        redirect: '/'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
