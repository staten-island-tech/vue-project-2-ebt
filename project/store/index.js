export const state = () => ({
  theme: false,
});

export const getters = {
  getTheme(state) {
    return state.theme;
  },
};

export const mutations = {
  setTheme(state, value) {
    state.theme = value;
  },
};

export const actions = {};
