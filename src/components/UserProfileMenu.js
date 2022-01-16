import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function UserProfileMenu({ anchorEl, open, UserService }) {
  function handleClose(e) {
    UserService.logout();
  }
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem id="logout" onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
