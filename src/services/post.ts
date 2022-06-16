export const getPostDetail = (postID: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then((res) => res.json())
    .then((data) => data);
};
