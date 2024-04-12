import { Fragment } from "react";
import Image from "next/image";

const TrendingBlog = ({ items }) => {
  return (
    <>
      <div className="trending row shadow pb-4">
        <div className="col-12">
          <h3 className="text-dark">Trending Blog</h3>
          {items.map((item) => (
            <Fragment key={item.id}>
              <div className="row tr">
                <div className="col-3">
                  <Image
                    width={57}
                    height={57}
                    src={`/blogImages/${item.thumbnail}`}
                    alt="post thumb"
                  />
                </div>
                <div className="col-9">
                  <p className="text-dark">
                    {item.title}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingBlog;
