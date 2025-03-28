import React from "react";
import ProfileHeader from "./header/ProfileHeader";
import Posts from "./posts/Posts";

interface Props {
  name: string;
}

const Profile = ({ name }: Props) => {
  return (
    <>
      <ProfileHeader name={name} />
      <Posts />
    </>
  );
};

export default Profile;
