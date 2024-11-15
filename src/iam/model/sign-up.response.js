/**
 * Sign up response model.
 * @summary
 * This model is used to return a message to the user after a sign-up request.
 */
export class SignUpResponse {
    /**
     * Constructor.
     * @param message The message sent to the user.
     */
    constructor(message) {
        this.message = message;
    }
}