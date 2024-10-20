import { BaseApi } from "../const/api";
import { apiRoutes } from "../const/apiroute";


export const AccountApi = {
    sendMessage(data) {
        return BaseApi.post(apiRoutes.Chat.sendMessage, data);
    },
    getChats(userId) {
        return BaseApi.post(apiRoutes.Chat.getChats, { data: { id: userId } });
    },
    createChat(data) {
        return BaseApi.post(apiRoutes.Chat.createChat, data);
    },
    getMessages(chatId) {
        return BaseApi.post(apiRoutes.Chat.getMessages, { data: { id: chatId } });
    },
};