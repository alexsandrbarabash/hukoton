import React from "react";

import "./profilePreview.scss";
import { useSelector } from "react-redux";

const ProfilePreview = () => {
  // const dividedName = name.split(' ');
  const { firstName, lastName, login } = useSelector((state) => state.userReducer);

  if (!login) {
    return null;
  }

  return (
    <div className="profile-preview d-flex align-items-center">
      <div className="profile-preview__avatar rounded-circle d-flex justify-content-center align-items-center">
        {firstName[0][0] + lastName[1][0]}
      </div>
      <div className="profile-preview__name">{`${firstName} ${lastName}`}</div>
    </div>
  );
};

export default ProfilePreview;
