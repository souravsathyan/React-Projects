import { useQuery } from "@tanstack/react-query";
import { fetchIndPost } from "../api/api";
import { NavLink, useParams } from "react-router-dom";

function FetchInd() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchIndPost(id),
  });
  const { title, body } = data;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }
  return (
    <div>
      <ul className="section-accordion">
        <li key={id}>
          <p>{id}</p>
          <p>{title}</p>
          <p>{body}</p>
        </li>
      </ul>
      <NavLink to="/rq">
        <button>Go Back</button>
      </NavLink>
    </div>
  );
}

export default FetchInd;
