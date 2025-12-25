import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const dateString = new Date(post.createdAt).toDateString();
  const FP = "http://localhost:5000/images/";

  return (
    <>
      <div className="post">
        {post.photo && (
          <img className="postImg" src={FP + post.photo} alt="Post" />
        )}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((cat, index) => {
              return (
                <span className="postCat" key={index}>
                  {cat}
                </span>
              );
            })}
            {/* <span className="postCat">Music</span>
          <span className="postCat">Life</span> */}
          </div>
          <span className="postTitle">
            <Link className="link" to={`/post/${post._id}`}>
              {post.title}
            </Link>
          </span>
          <hr />
          <span className="postDate">{dateString}</span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </>
  );
}
