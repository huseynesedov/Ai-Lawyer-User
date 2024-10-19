import { BaseApi } from "../const/api";
import { apiRoutes } from "../const/apiroute";

export const AccountApi = {
    AdminLogin(data) {
        return BaseApi.post(apiRoutes.login.adminLogin, data);
    },
    Login(data) {
        console.log(data)
        return BaseApi.post(apiRoutes.login.login, data);
    },
    Test(params) {
        return BaseApi.get(apiRoutes.login.test, { ...params });
    }
};