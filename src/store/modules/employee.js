import employeeService from '../../services';

const INITIAL_STATE = {
  employees: [],
  employee: {},
};

const getters = {};

const actions = {
  async getAllEmployees({ commit }) {
    const employees = await employeeService.getAll();

    commit('getAllEmployees', employees);
  },
  async getEmployee({ commit }, id) {
    const employee = await employeeService.get(id);

    commit('getEmployee', employee);
  },
  async createEmployee({ state, commit }) {
    const { employee } = state;

    await employeeService.create(employee);

    commit('createEmployee', employee);
  },
  async updateEmployee({ state, commit }) {
    const { employee } = state;

    await employeeService.update(employee);

    commit('updateEmployee', employee);
  },
  async removeEmployee({ commit }, id) {
    await employeeService.remove(id);

    commit('removeEmployee', id);
  },
};

const mutations = {
  getAllEmployees(state, payload) {
    state.employees = payload;
  },
  getEmployee(state, payload) {
    state.employee = payload;
  },
  createEmployee(state, payload) {
    state.employees.push(payload);
  },
  updateEmployee(state, payload) {
    for (let i = 0; i < state.employees.length; i += 1) {
      let element = state.employees[i];

      if (element.id === payload.id) {
        element = { ...payload };
      }
    }
  },
  removeEmployee(state, payload) {
    state.employees = state.employees.filter((element) => element.id !== payload);
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
