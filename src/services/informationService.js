import httpClient from 'httpClient';

class InformationService {
  getTermsConditions() {
    return httpClient.get('/information/terms_conditions/');
  }

  getNotificationsList() {
    return httpClient.get('/information/notifications/');
  }
}

export default new InformationService();
