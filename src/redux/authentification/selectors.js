export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectIsRefetchingCurrentUser = state =>
  state.auth.isRefetchingCurrentUser;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectIsSignIn = state => state.auth.isSignIn;
