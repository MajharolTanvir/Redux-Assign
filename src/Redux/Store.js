import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { blogReducer } from "./ActionReducer/BlogReducer";


export const store = createStore(blogReducer, composeWithDevTools());
