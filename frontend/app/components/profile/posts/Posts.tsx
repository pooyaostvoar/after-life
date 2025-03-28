import React from "react";
import styles from "./Post.module.css";
import Post from "./post/Post";

interface Props {
  name: string;
}

const Posts = () => {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
