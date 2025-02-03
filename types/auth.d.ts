// auth.d.ts
declare module '#auth-utils' {
    interface User {
        id: string
        avatar: string
        global_name: string
        username: string
        email: string
    }

    interface UserSession {

    }

    interface SecureSessionData {
        token: {
            token_type: string;
            access_token: string;
        }
    }
}

export {}