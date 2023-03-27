import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login';
import Register from '../views/Register';
import Appointment from '../views/Appointment';
import AdminDashboard from '../views/admin/AdminDashboard';
import ServiceCategory from '../views/admin/ServiceCategory';
import ServiceType from '../views/admin/ServiceType';
import Branch from '../views/admin/Branch';
import AppointmentApproval from '../views/admin/AppointmentApproval';
import Test from '../views/Test';

const routes = [
    { 
        path: '/register', 
        name: 'Register',
        component: Register
    },
    { 
        path: '/', 
        name: 'Login',
        component: Login
    },
    { 
        path: '/appointment', 
        name: 'Appointment', 
        component: Appointment,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/appointment-approval',
        name: 'AppointmentApproval',
        component: AppointmentApproval,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/service-category',
        name: 'ServiceCategory',
        component: ServiceCategory,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/service-type',
        name: 'ServiceType',
        component: ServiceType,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/branch',
        name: 'Branch',
        component: Branch,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/test', 
        name: 'Test',
        component: Test
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from) => {
    // && !auth.isLoggedIn()
    const getUser = localStorage.getItem('user');
    const user = JSON.parse(getUser);
    const token = localStorage.getItem('token');

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        if (token) {
            return true;
        } else {
            // if not, redirect to login page.
            return {
                path: '/',
                // save the location we were at to come back later
                query: { redirect: to.fullPath },
            }
        }
    }

    if (token && user) {
        return user.isAdmin ?  { path: '/admin-dashboard' } : { path: '/appointment' };
        // return user.isAdmin ?  { path: '/admin-dashboard' } : { path: '/appointment' };
    }
});

export default router;