import API, { execute } from './Api'

export default {
  createNewProject: data => execute(API().post('portfolio', data)),
  getAll: (page, size = 10) => execute(API().get(`portfolio?page=${page}&size=${size}`)),
  getSingle: (id) => execute(API().get('portfolio/' + id)),
  updateProject: (id, data) => execute(API().post(`portfolio/${id}`, data)),
  deleteProject: (id, data) => execute(API().delete(`portfolio/${id}`))
}
