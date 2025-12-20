import { Link } from "react-router-dom";
import "./post.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export default function Post({ post }) {
  const loading = useContext(AppContext);
  console.log(loading, "from post component");
  const dateString = new Date(post.createdAt).toDateString();
  return (
    <>
      {loading ? <div className="post loading">Loading...</div> : null}
      <div className="post">
        {post.photo && <img className="postImg" src={post.photo} alt="Post" />}

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
