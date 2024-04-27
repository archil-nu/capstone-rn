import { useReducer } from 'react';
import { validateEmail } from '../utils';

const initialState = {
  firstName: '',
  email: '',
};

const ACTIONS = {
  SET_FIRST_NAME: 'setFirstName',
  SET_EMAIL: 'setEmail',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      throw new Error();
  }
};

export const useUserInformation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isValid = () => {
    return !!state.firstName && !!validateEmail(state.email);
  };

  const setFirstName = (firstName) =>
    dispatch({ type: ACTIONS.SET_FIRST_NAME, payload: firstName });
  const setEmail = (email) =>
    dispatch({ type: ACTIONS.SET_EMAIL, payload: email });

  return [state, setFirstName, setEmail, isValid];
};
