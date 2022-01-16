import React from "react";
import UserProfileMenu from "./UserProfileMenu";

export default function UserProfileButton({ UserService }) {
  const user = UserService.getUser();
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  function handleClick(e) {
    setMenuAnchor(menuAnchor ? null : e.currentTarget);
  }
  return (
    <div className="ProfileButton" onClick={handleClick}>
      <img className="HeaderProfileImage" alt="" src={user.photoURL} />
      {user.displayName}
      <UserProfileMenu
        anchorEl={menuAnchor}
        open={menuAnchor !== null}
        UserService={UserService}
      />
    </div>
  );
}
