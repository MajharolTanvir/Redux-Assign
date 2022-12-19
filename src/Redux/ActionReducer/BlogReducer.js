import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../ActionTypes/ActionTypes";

const initialState = {
  blogs: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case UPDATE_CONTENT:
      return {};
    case DELETE_CONTENT:
      return {};
    default:
      return state;
  }
};
