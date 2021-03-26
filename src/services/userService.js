import httpClient from 'httpClient';

class UserService {
  login(user) {
    return httpClient.post('/login/', user);
  }

  signUp(user) {
    return httpClient.post('/users/sign-up/', user);
  }

  updateUserInfo(userInfo) {
    return httpClient.put('/user/', userInfo);
  }

  resetPassword(email) {
    return httpClient.post('/password/reset/', email);
  }

  resendVerificationEmail(email) {
    return httpClient.post('/users/resend-verification-email/', email);
  }
}

export default new UserService();
