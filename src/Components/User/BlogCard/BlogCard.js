import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {deleteBlog} from "../../../Redux/Actions/Actions"

const BlogCard = ({ blogs }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  console.log(blogs);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {blogs?.map((blog) => (
        <div
          key={blog?._id}
          className="card w-full md:w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={blog?.blogImage} alt="Shoes" />
          </figure>
          <div className="flex justify-start items-center gap-3 pt-5 px-10">
            <img
              className="w-12 h-12 rounded-full"
              src={blog?.authorImage}
              alt=""
            />
            <div className="text-start">
              <p className="font-semibold">{blog?.authorName}</p>
              <p>{blog?.publishDateTime}</p>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{blog?.blogTitle?.slice(0, 30)}</h2>
            <p className="text-justify">
              {blog?.blogDescription?.slice(0, 128)}...
            </p>
            {pathname === "/" ? (
              <div className="card-actions">
                <button className="btn btn-primary w-full">More Details</button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <button className="btn btn-primary">
                  <AiFillEdit className="text-2xl" />
                </button>
                <button className="btn btn-primary">More Details</button>
                <button onClick={() => dispatch(deleteBlog(blog))} className="btn btn-primary">
                  <AiFillDelete className="text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
