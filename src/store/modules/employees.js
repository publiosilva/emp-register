import employeeService from '../../services/employees';

const INITIAL_STATE = {
  employees: [],
  employee: {
    id: null,
    name: '',
    position: '',
    mobile: '',
  },
};

const getters = {};

const actions = {
  async getAllEmployees({ commit }) {
    try {
      const { data: employees } = await employeeService.getAll();

      commit('getAllEmployees', employees);
    } catch (error) {
      console.log('error', error);
    }
  },
  async getEmployee({ commit }, id) {
    try {
      const { data: employee } = await employeeService.get(id);

      commit('getEmployee', employee);
    } catch (error) {
      console.log('error', error);
    }
  },
  async createEmployee({ state, commit }) {
    const { employee } = state;

    try {
      await employeeService.create(employee);

      commit('createEmployee', employee);
    } catch (error) {
      console.log('error', error);
    }
  },
  async updateEmployee({ state, commit }) {
    const { employee } = state;

    try {
      await employeeService.update(employee);

      commit('updateEmployee', employee);
    } catch (error) {
      console.log('error', error);
    }
  },
  async removeEmployee({ commit }, id) {
    try {
      await employeeService.remove(id);

      commit('removeEmployee', id);
    } catch (error) {
      console.log('error', error);
    }
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
    state.employees = state.employees.map((element) => {
      if (element.id !== payload.id) return element;

      return { ...payload };
    });
  },
  removeEmployee(state, payload) {
    state.employees = state.employees.filter((element) => element.id !== payload);
  },
  clearFields(state) {
    state.employee = {
      id: null,
      name: '',
      position: '',
      mobile: '',
    };
  },
};

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
};
