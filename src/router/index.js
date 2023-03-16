import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login';
import Appointment from '../views/Appointment';

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/appointment', name: 'Appointment', component: Appointment },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;