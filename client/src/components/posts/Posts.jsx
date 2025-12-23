import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts, loading }) {
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
