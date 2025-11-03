import { Creat_New_User } from "../Type";

const initialState = {
  createNewUser: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Creat_New_User:
      return {
        ...state,
        createNewUser: action.payload,
      };

    default:
      return state;
  }
};
