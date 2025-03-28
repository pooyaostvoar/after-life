import React from "react";
import styles from "./Post.module.css";

interface Props {
  name: string;
}

const Post = () => {
  return (
    <div>
      <div>
        post text bla bla bla post text bla bla bla post text bla bla bla post
        text bla bla bla post text bla bla bla post text bla bla bla post text
        bla bla bla post text bla bla bla post text bla bla bla post text bla
        bla bla post text bla bla bla post text bla bla bla
      </div>
      <div className={styles.PostImg}></div>
    </div>
  );
};

export default Post;
