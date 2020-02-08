const state: any = {
  authenticated: false,
};

const getters = {
  auth: (state: any) => state.authenticated,
};

const actions: any = {
  authUser() {
    this.authenticated = true;
  },
};

const mutations: any = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
