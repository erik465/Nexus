export const selectToken = (state) => state.auth.token;
export const selectIsLoadingAuth = (state) => state.auth.isLoading;
export const selectErrorAuth = (state) => state.auth.error;

export const selectUser = (state) => state.user.data;
export const selectUserFitnessGoal = (state) => state.user?.data?.fitnessGoal;
export const selectTasks = (state) => state.user.tasks;
