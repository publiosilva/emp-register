import api from './api';

function getAll() {
  return api.get('/employees');
}

function get(id) {
  return api.get(`/employees/${id}`);
}

function create(employee) {
  return api.post('/employees', employee);
}

function update(employee) {
  return api.put(`/employees/${employee.id}`, employee);
}

function remove(id) {
  return api.delete(`/employees/${id}`);
}

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
