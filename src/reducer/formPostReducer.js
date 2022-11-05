import { FORM_POST_ERROR, FORM_POST_SUCCESS } from "./constant";

export const formPostReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORM_POST_ERROR:
      return { ...state, message: payload.message, postLoading: false };
    case FORM_POST_SUCCESS:
      return { ...state, message: payload.message, postLoading: false };
    default:
      return state;
  }
};
