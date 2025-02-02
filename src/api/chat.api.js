import { BaseApi } from "../const/api";
import { apiRoutes } from "../const/apiroute";


export const ChatApi = {
    sendMessage(params) {
        return BaseApi.post(apiRoutes.Chat.sendMessage, params);
    },
    getChats(chatId) {
        return BaseApi.get(`${apiRoutes.Chat.getChats}${chatId}`);
    },
    createChat(data) {
        return BaseApi.post(apiRoutes.Chat.createChat, data );
    },
    getMessages(chatId) {
        return BaseApi.get(`${apiRoutes.Chat.getMessages}${chatId}`);
    },
};