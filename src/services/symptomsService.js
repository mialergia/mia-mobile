import httpClient from 'httpClient';

class SymptomsService {
  getGenericQuestions() {
    return httpClient.get('/symptoms/category_symptoms/');
  }

  sendSymptomsEvent(symptomsEvent) {
    return httpClient.post('/symptoms/historial/', symptomsEvent);
  }

  getDiaryQuestions() {
    return httpClient.get('/symptoms/questions/');
  }

  sendDiaryEntry(entry) {
    return httpClient.post('/symptoms/diary/', entry);
  }

  getDiaryEntries() {
    return httpClient.get('/symptoms/diary/');
  }
}

export default new SymptomsService();
