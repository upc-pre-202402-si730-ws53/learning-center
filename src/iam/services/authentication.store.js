import {defineStore} from "pinia";
import {AuthenticationService} from "./authentication.service.js";
import {SignInResponse} from "../model/sign-in.response.js";
import {SignUpResponse} from "../model/sign-up.response.js";

/**
 * Authentication service instance
 * @type {AuthenticationService}
 */
const authenticationService = new AuthenticationService();

/**
 * Authentication store
 * @summary
 * This store is responsible for managing the user authentication state.
 * It provides the following functionalities:
 * - signIn: signs in the user
 * - signUp: signs up the user
 * - signOut: signs out the user
 */
export const useAuthenticationStore = defineStore({
    id: 'authentication',
    state: () => ({ signedIn: false, userId: 0, username: ''}),
    getters: {
        /**
         * Returns the signed in state
         * @returns {boolean} true if the user is signed in, false otherwise
         */
        isSignedIn: (state) => state['signedIn'],
        /**
         * Returns the current user id
         * @returns {number} current user id
         */
        currentUserId: (state) => state['userId'],
        /**
         * Returns the current username
         * @returns {string} current username
         */
        currentUsername: (state) => state['username'],
        /**
         * Returns the current token
         * @returns {string} current token
         */
        currentToken: () => localStorage.getItem('token')
    },
    actions: {
        /**
         * Signs in the user
         * @summary
         * This method sends a sign in request to the authentication service.
         * If the request is successful, it sets the signed in state to true,
         * stores the user id and username and saves the token in the local storage.
         * It then redirects the user to the home page.
         * @param signInRequest - {@link SignInRequest} sign in request
         * @param router - router instance
         */
        async signIn(signInRequest, router) {
            authenticationService.signIn(signInRequest)
                .then(response => {
                    let signInResponse = new SignInResponse(response.data.id, response.data.username, response.data.token);
                    this.signedIn = true;
                    this.userId = signInResponse.id;
                    this.username = signInResponse.username;
                    localStorage.setItem('token', signInResponse.token);
                    console.log(signInResponse);
                    router.push({ name: 'home' });
                    })
                .catch(error => {
                    console.log(error);
                    router.push({ name: 'sign-in' });
                });
        },
        /**
         * Signs up the user
         * @summary
         * This method sends a sign-up request to the authentication service.
         * If the request is successful, it redirects the user to the sign-in page.
         * @param signUpRequest - {@link SignUpRequest} sign up request
         * @param router - router instance
         */
        async signUp(signUpRequest, router) {
            authenticationService.signUp(signUpRequest)
                .then(response => {
                    let signUpResponse = new SignUpResponse(response.data.message);
                    console.log(signUpResponse);
                    router.push({ name: 'sign-in' });
                });
        },
        /**
         * Signs out the user
         * @summary
         * This method signs out the user by setting the signed in state to false,
         * clearing the user id and username, removing the token from the local storage
         * and redirecting the user to the sign-in page.
         * @param router - router instance
         */
        async signOut(router) {
            this.signedIn = false;
            this.userId = 0;
            this.username = '';
            localStorage.removeItem('token');
            router.push({ name: 'sign-in' });
        }

    }
})