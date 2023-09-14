import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types';

const Blogs = ({handleAddToBookmark}) => {
  const [bolgs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl">Blogs:{bolgs.length}</h1>
      {
              bolgs.map(blog => <Blog
                  key={blog.id}
                  blog={blog}
                  handleAddToBookmark={handleAddToBookmark}
              ></Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
    handleAddToBookmark: propTypes.func
}

export default Blogs;
