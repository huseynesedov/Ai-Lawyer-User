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


    // account.api.js
    resetPasswordSendOtp(email) {
        return BaseApi.post(`${apiRoutes.Auth.resetPasswordSendOtp}${email}`); // Sade bir yapı ile gönderim
    },



    resetPasswordWithOtp(params) {
        return BaseApi.post(`${apiRoutes.Auth.resetPasswordWithOtp}?email=${params.email}&otpCode=${params.otpCode}`, params);
    },
    verifyOtp(params) {
        return BaseApi.post(`${apiRoutes.Auth.verifyOtp}?email=${encodeURIComponent(params.email)}&otpCode=${encodeURIComponent(params.otpCode)}`);
    },
    resetPasswordSendEmail(emailId) {
        return BaseApi.post(apiRoutes.Auth.resetPasswordSendEmail, emailId);
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
        return BaseApi.post(apiRoutes.Auth.login, data);
    },
    submitForm(data) {
        return BaseApi.post(apiRoutes.ContactForm.submitForm, data);
    },


};