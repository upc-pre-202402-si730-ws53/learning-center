/**
 * Sign in response model
 * @summary
 * This model is used to create a sign in response object
 */
export class SignInResponse {
    /**
     * Constructor
     * @param id The user id
     * @param username The username
     * @param token The generated token
     */
    constructor(id, username, token) {
        this.id = id;
        this.username = username;
        this.token = token;
    }
}