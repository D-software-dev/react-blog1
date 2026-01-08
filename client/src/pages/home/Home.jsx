import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState();

  useEffect(() => {
    // setLoading(true);
    const newUser = searchParams.get("user") || null;
    const newCat = searchParams.get("cat") || null;
    console.log(`new user is ${newUser}`);
    const fetchPosts = async () => {
      setLoading(true);
      try {
        let res;
        const url = newUser
          ? `${process.env.REACT_APP_API_URL}/api/posts?user=${newUser}`
          : newCat
          ? `${process.env.REACT_APP_API_URL}/api/posts?cat=${newCat}`
          : `${process.env.REACT_APP_API_URL}/api/posts`;
        res = await axios.get(url, {
          headers: { "Cache-Control": "no-cache" }, // prevent 304
        });
        console.log(res.data);
        setPosts(res.data);
        // console.log(posts);
        // setPosts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
    console.log("Page repainted");
  }, [searchParams]);

  // console.log(posts, "outside the useEffect");

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} loading={loading} />
        <Sidebar />
      </div>
    </>
  );
}
