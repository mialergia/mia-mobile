import httpClient from 'httpClient';

class PollenService {
  getReports = () => httpClient.get('/pollens/report/');

  getPollenDetails = groupId => httpClient.get(`/pollens/report/detail/${groupId}/`);

  getAllergies = () => httpClient.get('/pollens/allergies/');

  getPollenPdfs = groupId => httpClient.get(`/pollens/pdfs/${groupId}/`);
}

export default new PollenService();
