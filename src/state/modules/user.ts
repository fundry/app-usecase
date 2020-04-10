/*
  ======= Inorder to enforce brevity,
  ======= Auth Logic is moved to Auth0 file 
  ======= and thus updated here
*/

const state: any = {
  isAuthenticated: true,
  userDetails: {
    name: "",
    isOrganization: true
  }
};

const getters = {
  isAuthenticated: (state: any) => state.isAuthenticated,
  userDetails: (state: any) => state.userDetails
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
