import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsData } from "../../Redux/thunk/GetBlogs/GetBlogs";
import BlogCard from "../User/BlogCard/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  // const dispatch = useDispatch();

  useEffect(
    () => {
      fetch("blogs.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
      // dispatch(getBlogsData());
    },
    []
    // [dispatch]
  );

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="container mx-auto mt-5">
      <BlogCard blogs={blogs} />
    </div>
  );
};

export default Home;
