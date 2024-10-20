export const apiRoutes = {
    Admin: {
        login: '/api/admin/get-users',
        setPremium: '/api/admin/set-premium/{userId}',
        removePremium: '/api/admin/remove-premium/{userId}',
        getAllForms: '/api/admin/GetAllForms',
        approveForm: '/api/admin/ApproveForm/{id}',
        updateRequestCount: '/api/admin/UpdateRequestCount',
        banUser: '/api/admin/ban-user',
        unBanUser: '/api/admin/unban-user/{user-id}',
    },
    Auth: {
        register: '/api/Auth/register',
        verifyEmail: '/api/Auth/verifyEmail',
        sendOtpToWhatsApp: '/api/Auth/sendOtpToWhatsApp',
        resetPasswordSendOtp: '/api/Auth/resetPasswordSendOtp',
        resetPasswordWithOtp: '/api/Auth/resetPasswordWithOtp',
        verifyOtp: '/api/Auth/verifyOtp',
        resetPasswordSendEmail: '/api/Auth/resetPasswordSendEmail',
        resetPassword: '/api/Auth/resetPassword',
        login: '/api/Auth/login',
        googleLogin: '/api/Auth/google-login',
        logout: '/api/Auth/logout',
        googleCallBack: '/api/Auth/google-calback',
    },

    Chat: {
        sendMessage: '/api/Chat/send-message',
        getChats: '/api/Chat/get-chats',
        createChat: '/api/Chat/create-chat',
        createChat: '/api/Chat/get-messages/{chatId}',
    },

    ContactForm: {
        submitForm:"/api/ContactForm/SubmitForm"
    },

    UserManagement:{
        getAllUsers: '/api/UserManagement/get-all-users',
        getUser: '/api/UserManagement/get-user/{userId}',
        grantAdminStatus: '/api/UserManagement/grant-admin-status/{userId}',
        removeAdminStatus: '/api/UserManagement/remove-admin-status/{userId}',
        updateUser: '/api/UserManagement/update-user/{userId}',
        
    }

};