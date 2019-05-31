const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('user login success');
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed.'
      };
    case 'LOGOUT_SUCCESS':
      console.log('logout success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('new user signed up');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('user sign up failed');
      console.log(action)
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;