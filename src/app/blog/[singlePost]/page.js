import TopSection from "@/app/home/TopSection";
import Navbar from "@/components/Navbar";
import "@/css/style.css";
import "@/css/blog-details.css";
import "@/css/responsive.css";
import "@/css/blog-details-responsive.css";
import Image from "next/image";
import facebookIcon from "@/images/blog/facebook.png"
import linkedInIcon from "@/images/blog/linkedin.png"
import twitterIcon from "@/images/blog/twitter.png"
import instagramIcon from "@/images/blog/instagram.png"
import pinterestIcon from "@/images/blog/pinterest.png"
import loveIcon from "@/images/home/love.png"
import commentIcon from "@/images/home/comment.png"
import shareIcon from "@/images/home/share.png"
import { getPosts } from "@/utils/getPosts";
import TrendingBlog from "../blog/TrendingBlog";
import Comment from "../blog/Comment";

const page = async ({ params }) => {
  const posts = await getPosts();
  const singlePost = posts.find((post) => post.id === params.singlePost);
  const latestPosts = posts.filter((post, i) => i < 3);

  
  return (
    <>
      <div className="container-fluid header_n_topSection text-white">
        <Navbar />
        <TopSection page={`${singlePost?.title}`} />
      </div>
      
	{/* <!-- BLOG DETAILS --> */}
	<div className="container blog_wrapper mt-5">
		<div className="row blog_inner">
			{/* <!-- blog main section --> */}
			<div className="col-12 col-lg-8 col-md-7 blog_main">
				{/* <!-- thumbnail row --> */}
				<div className="row post_thumb">
					<div className="col-12">
						<Image style={{objectFit: 'cover'}} width={730} height={400} src={`/blogImages/${singlePost?.thumbnail}`} alt="Thumnail"/>
					</div>
				</div>
				{/* <!-- post description --> */}
				<div className="row bm shadow">
					<div className="col-12">
						<div className="row blog_meta">
							<div className="col-6 col-lg-3">
					    		<p>{singlePost?.date} &nbsp;&nbsp;/</p>
					    	</div>
					    	<div className="col-2 col-lg-1">
					    		<Image width={20} height={20} src={loveIcon} alt="love"/>
					    		<span className="total">{singlePost?.like}</span>
					    	</div>
					    	<div className="col-2 col-lg-1">
					    		<Image width={20} height={20} src={commentIcon} alt="comment"/>
					    		<span className="total">{singlePost?.comment}</span>
					    	</div>
					    	<div className="col-2 col-lg-1">
					    		<Image width={20} height={20} src={shareIcon} alt="share"/>
					    		<span className="total">{singlePost?.share}</span>
					    	</div>
						</div>
						<div className="row blog_desc">
							<div className="col-12">
								<h2 className="text-dark">{singlePost?.title}</h2>
								<p className="text-light">
									{singlePost?.description}
								</p>
								<p className="text-light">
									{singlePost?.description}
								</p>
							</div>
						</div>
						<div className="row blog_bottom">
							<div className="col-12 col-md-6">
								<h3 className="text-dark">
									Related Tags
								</h3>
								<div className="tags">
									<a href="#" className="mr-2 text-dark badge">Estate</a>
									<a href="#" className="mr-2 text-dark badge">Houses</a>
									<a href="#" className="mr-2 text-dark badge">Real Estate</a>
								</div>
							</div>
							<div className="col-12 col-md-6 text-md-right">
								<h3 className="text-dark">
									Social Share
								</h3>
								<div className="tags">
									<a href="#" className="ml-3"><Image src={facebookIcon} alt="facebook"/></a>
									<a href="#" className="ml-3"><Image src={linkedInIcon} alt="linkedin"/></a>
									<a href="#" className="ml-3"><Image src={twitterIcon} alt="twitter"/></a>
									<a href="#" className="ml-3"><Image src={instagramIcon} alt="instagram"/></a>
									<a href="#" className="ml-3"><Image src={pinterestIcon} alt="pinterest"/></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- comments section --> */}
				<div className="row comments shadow">
					<div className="col-12">
						{/* <h4 className="text-dark">03 Comments</h4> */}
						{/* <div className="row cm">
							<div className="col-3 col-md-2">
								<img src="images/blog/owner5.png" alt="comment writer" className="cm_author"/>
							</div>
							<div className="col-6 col-md-8">
								<h6>Mitchel Mars</h6>
								<p className="text_purple">19 Oct,2020</p>
								<p className="text-light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
							</div>
							<div className="col-3 col-md-2 text-right">
								<a href="#" className="text-dark">Reply</a>
							</div>
						</div> */}
                        {/* <!-- end of last single comment --> */}
						<h4 className="text-dark">Post Comment</h4>	
						<Comment/>
					</div>
					
				</div>
                {/* <!-- end of comments --> */}
			</div>
            {/* <!-- end of blog main --> */}
			{/* <!-- blog sidebar --> */}
			<div className="col-12 col-lg-4 col-md-5 blog_sidebar">
				{/* <!-- search row --> */}
				<div className="search row shadow">
					<div className="col-12">
						<h3 className="text-dark">Search</h3>
						<input type="text" placeholder="Search here..." className="text-light form-control"/>
					</div>
				</div>
                {/* <!-- end of search row --> */}
				{/* <!-- trending row --> */}
				<TrendingBlog items={latestPosts}/>
			</div>
			{/* <!-- end of blog sidebar --> */}
		</div>
	</div>			
	{/* <!-- END OF BLOG DETAILS --> */}
    </>
  );
};

export default page;
