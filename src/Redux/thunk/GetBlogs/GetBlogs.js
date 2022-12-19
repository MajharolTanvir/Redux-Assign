import { getBlogs } from "../../Actions/Actions";

export const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("Blogs.json");
    const data = res.json();

    if (data) {
      dispatch(getBlogs(data));
    }
  };
};
