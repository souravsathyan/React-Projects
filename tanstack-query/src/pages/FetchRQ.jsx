import { useState } from "react";
import { NavLink } from "react-router-dom";
import { deletePost, fetchPosts, updatePost } from "../api/api";
import {
  useQuery,
  keepPreviousData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

function FetchRQ() {
  const [page, setPage] = useState(0);

  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", page], (curElem) => {
        return curElem?.filter((elem) => elem.id !== id);
      });
    },
  });
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    // onSuccess: (return response, parameter-passed)
    onSuccess: (apiData, postId) => {
      queryClient.setQueryData(["posts", page], (postData) => {
        return postData?.map((elem) => {
          return elem.id === postId
            ? { ...elem, title: apiData.data.title }
            : elem;
        });
      });
    },
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
              <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
              <button onClick={() => updateMutation.mutate(id)}>Update</button>
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
