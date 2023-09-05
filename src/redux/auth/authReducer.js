export const handlePending = (state) => {
    state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

export const handleFulfilledRegistration = (state, { payload }) => {
    console.log(payload)
    state.error = null;
    state.data = payload.user;
    state.isSuccesses = true;
    state.isLoading = false;
    state.token = payload.token
};
export const handleFulfilledLogin = (state, { payload }) => {
   
    state.error = null;
    state.data = payload.user;
    state.isSuccesses = true;
    state.isLoading = false;
    state.token = payload.token;
};
export const handleFulfilledLogOut = (state) => {
    state.error = null;
    state.data = null;
    state.isSuccesses = false;
    state.isLoading = false;
    state.token = null;
};

export const handleFulfilledRefresh = (state, { payload }) => {
    state.data = payload;
    state.isSuccesses = true;
    state.isLoading = false;
    state.isRefreshing = false;
};