import Image from "next/image";
import loveIcon from "@/images/home/love.png";
import commentIcon from "@/images/home/comment.png";
import shareIcon from "@/images/home/share.png";

const Post = ({ post }) => {
  return (
    <>
      <div className="col-12 col-lg-4 col-md-6">
        <div className="card shadow">
          <Image
            width={348}
            height={229}
            className="card-img-top"
            src={`/blogImages/${post.thumbnail}`}
            alt="post thumbnail"
          />
          <div className="card-body">
            <h2 className="text-dark">{post.title}</h2>
            <div className="row meta_info text-dark">
              <div className="col-5">
                <p>{post.date} &nbsp;&nbsp;/</p>
              </div>
              <div className="col-2">
                <Image width={14} height={14} src={loveIcon} alt="love" />
                <span className="total">{post.like}</span>
              </div>
              <div className="col-2">
                <Image width={14} height={14} src={commentIcon} alt="comment" />
                <span className="total">{post.comments}</span>
              </div>
              <div className="col-2">
                <Image width={14} height={14} src={shareIcon} alt="share" />
                <span className="total">{post.shares}</span>
              </div>
            </div>
            <p className="card-text text-light">
              {post.description.length > 120
                ? post.description.slice(0, 120) + "..."
                : post.description}
            </p>
          </div>
          <div className="card-footer">
            <div className="row cf">
              <div className="col-6">
                <a href={`/blog/${post.id}`} className="text_purple">
                  Read More
                </a>
              </div>
              <div className="col-6 text-right">
                <p>
                  By {post.author} &nbsp;
                  <Image
                    width={35}
                    height={36}
                    src={`/blogImages/${post.author_image}`}
                    alt="author"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
