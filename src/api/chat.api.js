import { BaseApi } from "../const/api";
import { apiRoutes } from "../const/apiroute";


export const ChatApi = {
    sendMessage(data) {
        return BaseApi.post(apiRoutes.Chat.sendMessage, data);
    },
    getChats(userId) {
        return BaseApi.get(apiRoutes.Chat.getChats, { data: { id: userId } });
    },
    createChat(data) {
        return BaseApi.post(apiRoutes.Chat.createChat, data);
    },
    getMessages(chatId) {
        return BaseApi.get(apiRoutes.Chat.getMessages, { data: { id: chatId } });
    },
};