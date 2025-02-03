import type {H3Event} from "h3";

export const getDiscordToken = async (event: H3Event): Promise<string> => {
    const {secure} = await requireUserSession(event);

    if (!secure) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Session not found'
        });
    }

    const token = secure.token

    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: "No discord token found",
        });
    }


    return `${token.token_type} ${token.access_token}`;
}