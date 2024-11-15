import {useAuthenticationStore} from "./authentication.store.js";

/**
 * Guard to check if the user is authenticated
 * @param to The route the user is navigating to
 * @param from The route the user is navigating from
 * @param next The guard function to navigate to the next route
 */
export const authenticationGuard = (to, from, next) => {
    const authenticationStore = useAuthenticationStore();
    const isAnonymous = !authenticationStore.isSignedIn;
    const publicRoutes = ['/sign-in', '/sign-up', '/about', '/page-not-found'];
    const routeRequiresToBeAuthenticated = !publicRoutes.includes(to.path);
    if (isAnonymous && routeRequiresToBeAuthenticated)
        next({ name: 'sign-in' });
    else next();
}