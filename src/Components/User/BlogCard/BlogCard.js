import React from "react";

const BlogCard = ({ blogs }) => {
  console.log(blogs);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {blogs?.map((blog) => (
        <div
          key={blog?.id}
          className="card w-full md:w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={blog?.blogImage} alt="Shoes" />
          </figure>
          <div className="flex justify-center items-center gap-3 pt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={blog?.authorImage}
              alt=""
            />
            <p>
              {blog?.authorName} {" "}, {blog?.publishDateTime}
            </p>
          </div>
          <div className="card-body">
            <h2 className="card-title">{blog?.blogTitle?.slice(0, 30)}</h2>
            <p className="text-justify">
              {blog?.blogDescription?.slice(0, 128)}
            </p>
            <div className="card-actions">
              <button className="btn btn-primary w-full">More Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
