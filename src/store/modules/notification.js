const state = () => ({
    content: "",
    type: "",
});

const mutations = {
    showNotification: (state, payload) => {
        state.content = payload.content;
        state.type = payload.type;
    },
};

export default {
    state,
    mutations,
};