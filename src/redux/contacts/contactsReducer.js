export const handlePending = (state) => {
    state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

export const handleFulfilledGet = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
    state.error = null;
};
export const handleFulfilledCreate = (state, { payload }) => {
    state.error = null;
    state.items.push(payload);
    state.isLoading = false;
};
export const handleFulfilledDelete = (state, { payload }) => {
    const index = state.items.findIndex(item => item.id === payload.id);
    if (index !== -1) {
        state.items.splice(index, 1);
    }
    state.isLoading = false;
    state.error = null;
};
export const handleFulfilledUpdate = (state, { payload }) => {
    const index = state.items.findIndex(({ id }) => id === payload.id);
    if (index !== -1) {
        state.items[index] = payload;
    };
    state.isLoading = false;
    state.error = null;
};