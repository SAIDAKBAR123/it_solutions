import API, { execute } from './Api'

export default {
  postMainImage: data => execute(API().post('files', data)),
  postNewBlog: data => execute(API().post('posts', data)),
  getAllPosts: (page, size) => execute(API().get(`posts/public?page=${page}&size=${size}`)),
  getSinglePost: id => execute(API().get(`posts/public/${id}`)),
  updateSinglePost: (id, data) => execute(API().post(`posts/${id}`, data)),
  deleteSinglePost: id => execute(API().delete(`posts/${id}`))
}
