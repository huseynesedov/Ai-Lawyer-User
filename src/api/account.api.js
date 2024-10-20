import { BaseApi } from "../const/api";
import { apiRoutes } from "../const/apiroute";


export const AccountApi = {
    register(data) {
        console.log(data)
        return BaseApi.post(apiRoutes.Auth.register, data);
    },
    verifyEmail(params) {
        return BaseApi.get(`${apiRoutes.Auth.verifyEmail}?token=${params.token}&email=${params.email}`);
    },
    sendOtpToWhatsApp(phoneId) {
        return BaseApi.post(apiRoutes.Auth.sendOtpToWhatsApp, { data: { id: phoneId } });
    },
    resetPasswordSendOtp(emailId) {
        return BaseApi.post(apiRoutes.Auth.resetPasswordSendOtp, { data: { id: emailId } });
    },
    resetPasswordWithOtp(params) {
        return BaseApi.post(`${apiRoutes.Auth.resetPasswordWithOtp}?email=${params.email}&otpCode=${params.otpCode}`);
    },
    verifyOtp(params) {
        return BaseApi.post(`${apiRoutes.Auth.verifyOtp}?email=${params.email}&otpCode=${params.otpCode}`);
    },
    resetPasswordSendEmail(emailId) {
        return BaseApi.post(apiRoutes.Auth.resetPasswordSendEmail, { data: { email: emailId } });
    },
    resetPassword(params) {
        return BaseApi.post(`${apiRoutes.Auth.verifyOtp}?email=${params.email}&token=${params.token}`);
    },
    googleLogin(params) {
        return BaseApi.get(apiRoutes.Auth.googleLogin, { ...params });
    },
    logout(data) {
        return BaseApi.post(apiRoutes.Auth.logout, data);
    },
    googleCallback(data) {
        return BaseApi.post(apiRoutes.Auth.googleCallBack, data);
    },

    Login(data) {
        console.log(data)
        return BaseApi.post(apiRoutes.Auth.login, data);
    },
};