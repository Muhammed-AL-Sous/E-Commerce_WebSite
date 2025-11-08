import { Creat_New_User, Login_User } from "../Type";

const initialState = {
  createNewUser: null,
  LoginUser: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Creat_New_User:
      return {
        ...state,
        createNewUser: action.payload,
      };

    case Login_User:
      return {
        ...state,
        LoginUser: action.payload,
      };

    default:
      return state;
  }
};
