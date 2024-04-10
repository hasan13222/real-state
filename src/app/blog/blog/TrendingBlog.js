import { Fragment } from "react";
import Image from "next/image";

const TrendingBlog = ({ items }) => {
  return (
    <>
      <div class="trending row shadow pb-4">
        <div class="col-12">
          <h3 class="text-dark">Trending Blog</h3>
          {items.map((item) => (
            <Fragment key={item.id}>
              <div class="row tr">
                <div class="col-3">
                  <Image
                    width={57}
                    height={57}
                    src={`/blogImages/${item.thumbnail}`}
                    alt="post thumb"
                  />
                </div>
                <div class="col-9">
                  <p class="text-dark">
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
