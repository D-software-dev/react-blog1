import "./singlePost.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  console.log(postId);
  // const { setUser } = useContext(AppContext);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        console.log(res.data);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="Single Post" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
