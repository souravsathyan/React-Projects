import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async (start) => {
  try {
    const res = await api.get(`/posts?_start=${start}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchIndPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deletePost = (id) => {
  console.log({ id });
  return api.delete(`/posts/${id}`);
};

export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { title: "I have updated" });
};

export const fetchUsers = async ({ pageParam }) => {
  console.log({ pageParam });
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
