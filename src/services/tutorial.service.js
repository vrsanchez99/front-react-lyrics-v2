import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorial");
  }

  get(id) {
    return http.get(`/tutorial/${id}`);
  }

  create(data) {
    return http.post("/tutorial", data);
  }

  update(id, data) {
    return http.put(`/tutorial/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorial/delete/${id}`);
  }

  deleteAll() {
    return http.delete('/tutorial/delete/all');
  }

  findByTitle(titulo) {
    return http.get(`/tutorial/titulo/${titulo}`);
  }
}

export default new TutorialDataService();