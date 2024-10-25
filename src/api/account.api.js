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
    resetPasswordSendOtp(params) {
        return BaseApi.post(apiRoutes.Auth.resetPasswordSendOtp, { ...params });
    },
    resetPasswordWithOtp(params) {
        return BaseApi.post(`${apiRoutes.Auth.resetPasswordWithOtp}?email=${params.email}&otpCode=${params.otpCode}`);
    },
    verifyOtp(params) {
        return BaseApi.post(`${apiRoutes.Auth.verifyOtp}?email=${params.email}&otpCode=${params.otpCode}`);
    },
    resetPasswordSendEmail(emailId) {
        const payload = { email: emailId };
        console.log('Payload being sent:', payload); // Gönderilecek veriyi loglayın
        return BaseApi.post(apiRoutes.Auth.resetPasswordSendEmail, payload);
    },

    resetPassword(params) {
        return BaseApi.post(`${apiRoutes.Auth.verifyOtp}?email=${params.email}&token=${params.token}`);
    },


    googleLogin() {
        return BaseApi.get(apiRoutes.Auth.googleLogin);
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