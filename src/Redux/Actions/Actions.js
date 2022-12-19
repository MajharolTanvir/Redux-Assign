import { ADD_CONTENT, GET_CONTENT } from "../ActionTypes/ActionTypes"

export const getBlogs = (blogs) => {
    return {
        type: GET_CONTENT,
        payload: blogs
    }
}

export const addBlog = (blog) => {
    return {
        type: ADD_CONTENT,
        payload: blog
    }
}