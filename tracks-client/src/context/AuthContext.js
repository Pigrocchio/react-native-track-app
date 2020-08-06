import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import {AsyncStorage} from 'react-native'
import * as RootNavigation from '../RootNavigation'


// reducers
const authReducer = (state, action) => {
    switch (action.type) {
      case "add_error":
        return { ...state, errorMessage: action.payload };
      case "signup":
        return { errorMessage: " ", token: action.payload };
      case "signin":
        return { errorMessage: " ", token: action.payload };
      case "clear_error_message":
        return { ...state, errorMessage: " " };
      default:
        return state;
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
        RootNavigation.navigate("MainFlow");

      } catch (error) {
        dispatch({type: 'add_error', payload: 'Something went wrong'})
      }
    };

}


const clearErrorMessage = dispatch => ()  => {
    dispatch({type: 'clear_error_message'})
  }



const signin = (dispatch) => {
  // the inner function is what is called inside the rendered component
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password })
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
              RootNavigation.navigate("MainFlow");


      

    } catch (error) {
              dispatch({type: 'add_error', payload: 'Something went wrong'})

    }
  };
};



const signout = (dispatch) => {
  // the inner function is what is called inside the rendered component
  return () => {};
};



export const { Provider, Context } = createDataContext(
         authReducer,
         { signin, signout, signup, clearErrorMessage },
         { token: null, errorMessage: "" }
       );