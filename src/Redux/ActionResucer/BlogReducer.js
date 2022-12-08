import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../ActionTypes/ActionTypes";

const initialState = {};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {};
    case ADD_CONTENT:
      return {};
    case UPDATE_CONTENT:
      return {};
    case DELETE_CONTENT:
      return {};
    default:
      return state;
  }
};
