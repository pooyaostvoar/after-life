import React from "react";
import styles from "./ProfileHeader.module.css";
import ManageFavorite from "./manage-favorite/ManageFavorite";

interface Props {
  name: string;
}

const ProfileHeader = ({ name }: Props) => {
  return (
    <div className={styles.container}>
      <div className="flex">
        <div className={styles.profilePic}></div>
        <div>{name}</div>
      </div>
      <div>
        <ManageFavorite isFavorite={true} />
      </div>
    </div>
  );
};

export default ProfileHeader;
