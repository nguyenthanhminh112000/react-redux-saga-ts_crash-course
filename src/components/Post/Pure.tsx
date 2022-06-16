import React from 'react';
import { postAction } from './../../store';

const Pure = ({
  id,
  title,
  body,
  userId,
}: {
  id: number;
  title: string;
  body: string;
  userId: number;
}) => {
  console.log(id);
  console.log(title);
  console.log(body);
  console.log(userId);

  const onFetchPost = () => {
    postAction('POST_DETAIL_REQUESTED', 2);
    return;
  };

  return (
    <div>
      <p>Post ID: {id}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <button onClick={onFetchPost}>Fetch post</button>
    </div>
  );
};

export default Pure;
