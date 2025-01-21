import { useEffect } from "react";
import { useState } from "react";
import { fetchPosts } from "../api/api";

function FetchOld() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      if (res.status === 200) {
        setPosts(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
      return null;
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <ul className="section-accordion">
        {posts?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchOld;
