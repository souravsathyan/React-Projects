import { useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchPosts } from "../api/api";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

function FetchRQ() {
  const [page, setPage] = useState(0);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="pagination-section container">
        <button
          disabled={page === 0 ? true : false}
          onClick={() => setPage(page - 3)}
        >
          Prev
        </button>
        <p>{page / 3 + 1} </p>
        <button onClick={() => setPage(page + 3)}>Next</button>
      </div>
    </div>
  );
}

export default FetchRQ;
