export default defineOAuthDiscordEventHandler({
  config: {
    scope: ["identify", "guilds"],
  },
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user,
      secure: {
        token: tokens,
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
