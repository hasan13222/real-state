"use client"
import Post from "@/app/shared/Post";
import { Fragment, useEffect, useState } from "react";

const Posts = () => {
  const [showPosts, setShowPosts] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const pageHandler = () => {
    const pages = Math.ceil(showPosts.length / 6);
    if (activePage < pages - 1) {
      setActivePage((prev) => prev + 1);
    } else {
      setActivePage(0);
    }
  };

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setShowPosts(data);
      });
  }, []);
  return (
    <>
      <div className="container blog_wrapper">
        {/* <!-- blog posts --> */}
        <div className="row blog_inner">
          {showPosts.map((post, i) => {
            if (i >= activePage * 6 && i < activePage * 6 + 6) {
              return (
                <Fragment key={post.id}>
                  <Post post={post} />
                </Fragment>
              );
            }
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button onClick={pageHandler} className="btn btn_purple text-white">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
