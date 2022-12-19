import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../Redux/Actions/Actions";
import BlogCard from "./BlogCard/BlogCard";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  const d = new Date().toString().slice(0, 25);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const blog = {
      authorName: data.authorityName,
      publishDateTime: d,
      authorImage: data.authorityImage,
      blogImage: data.thumbImage,
      blogTitle: data.title,
      blogDescription: data.description,
    };
    dispatch(addBlog(blog));
  };
  console.log(d);

  return (
    <section className="h-full">
      <div className="card w-96 bg-base-100 shadow-xl text-start p-10">
        <h5 className="text-xl py-4 font-bold text-center">Add Your Blogs</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold">Author Name</label>
          <input
            className="border w-full rounded focus:border-secondary p-1"
            {...register("authorityName", { required: true })}
          />
          {errors.authorityName && <span>Author name is required</span>}

          <label className="font-semibold">Author image link</label>
          <input
            className="border w-full rounded focus:border-secondary p-1"
            {...register("authorityImage", { required: true })}
          />
          {errors.authorityImage && <span>Author image link is required</span>}

          <label className="font-semibold">Thumbnail image link</label>
          <input
            className="border w-full rounded focus:border-secondary p-1"
            {...register("thumbImage", { required: true })}
          />
          {errors.thumbImage && <span>Thumbnail image link is required</span>}

          <label className="font-semibold">Blog Title</label>
          <input
            className="border w-full rounded focus:border-secondary p-1"
            {...register("title", { required: true })}
          />
          {errors.title && <span>Blog title is required</span>}

          <label className="font-semibold">Blog Description</label>
          <textarea
            className="border w-full rounded focus:border-secondary p-1"
            {...register("description", { required: true })}
          />
          {errors.description && <span>Blog description is required</span>}

          <input type="submit" className="btn w-full btn-primary" />
        </form>
      </div>
      <div>
        <BlogCard blogs={blogs} />
      </div>
    </section>
  );
};

export default Blogs;
