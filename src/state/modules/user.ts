/*
Inorder to enforce brevity, Auth Logic is moved to Auth0 file and thus updated here
*/

const state: any = {
  isAuthenticated: false

};

const getters = {
  isAuthenticated: (state: any) => state.isAuthenticated
};

const actions: any = {
  authUser() {
    this.isAuthenticated = true;
  }
};

const mutations: any = {};

export default {
  state,
  getters,
  actions,
  mutations
};
