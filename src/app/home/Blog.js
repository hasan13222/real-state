import { getPosts } from "@/utils/getPosts";
import { Fragment } from "react";
import Post from "../shared/Post";

const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      <div className="container blog_wrapper">
        <div className="row blog_heading text-center">
          <div className="col-12">
            <h3 className="mt-5 text-light">Our Blog</h3>
            <h2 className="text-dark">Read the latest news from our blog.</h2>
          </div>
        </div>

        {/* <!-- blog posts --> */}
        <div className="row blog_inner">
          {posts.map((post, i) => {
            if (i < 3) {
              return (
                <Fragment key={post.id}>
                  <Post post={post} />
                </Fragment>
              );
            }
          })}
          
        </div>
      </div>
    </>
  );
};

export default Blog;
