import { useContext } from "react";
import Post from "../post/Post";
import "./posts.css";
import { AppContext } from "../../AppContext";

export default function Posts({ posts }) {
  const loading = useContext(AppContext);
  console.log(loading, "from posts component");
  return (
    <>
      {loading ? <div className="loading">Loading posts...</div> : null}
      <div className="posts">
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </>
  );
}
