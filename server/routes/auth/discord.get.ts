export default defineOAuthDiscordEventHandler({
    config: {
        scope: ["identify", "guilds"],
    },
    async onSuccess(event, {user, tokens}) {
        await setUserSession(event, {
            user: {
                id: user.id,
                avatar: user.avatar,
                global_name: user.global_name,
                username: user.username,
                email: user.email
            },
            secure: {
                token: {
                    token_type: tokens.token_type,
                    access_token: tokens.access_token
                },
            },
        });
        return sendRedirect(event, "/");
    },
    // Optional, will return a json error and 401 status code by default
    onError(event, error) {
        console.error("Discord OAuth error:", error);
        return sendRedirect(event, "/");
    },
});
