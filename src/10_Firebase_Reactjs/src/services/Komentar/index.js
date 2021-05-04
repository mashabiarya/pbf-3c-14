import GetAPI from "../API/Get";
import PostAPI from "../API/Post";
import DeleteAPI from "../API/Delete";

const getCommentBlog = () => GetAPI("comments?_sort=id&_order=desc");

const postCommentBlog = (dataYgDikirim) => PostAPI("comments", dataYgDikirim);

const deleteCommentBlog = (dataYgDihapus) =>
  DeleteAPI("comments", dataYgDihapus);

const API = {
  getCommentBlog,
  postCommentBlog,
  deleteCommentBlog,
};

export default API;
