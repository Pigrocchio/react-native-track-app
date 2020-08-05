import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import {AsyncStorage} from 'react-native'


// reducers
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return {errorMessage: '', token: action.payload}
        default:
            return state
    }
};



// actions

const signup =  (dispatch) => {
    // the inner function is what is called inside the rendered component
    return async ({ email, password }) => {
      try {
          const response = await trackerApi.post("/signup", { email, password });
          await AsyncStorage.setItem('token', response.data.token)
          dispatch({ type: "signup", payload: response.data.token });
      } catch (error) {
        dispatch({type: 'add_error', payload: 'Something went wrong'})
      }
    };

}



const signin = (dispatch) => {
  // the inner function is what is called inside the rendered component
  return ({ email, password }) => {};
};



const signout = (dispatch) => {
  // the inner function is what is called inside the rendered component
  return () => {};
};



export const { Provider, Context } = createDataContext(
    authReducer,
    {signin,signout,signup},
    {token: null, errorMessage: ''}
)