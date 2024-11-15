/**
 * Sign in request model
 * @summary
 * This model is used to create a sign in request object
 */
export class SignInRequest {
    /**
     * Constructor
     * @param {string} username - The username
     * @param {string} password - The password
     */
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}