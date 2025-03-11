// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar } from "@mantine/core";
import { Menu } from "@mantine/core";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/Slice/authSlice";
import { useNavigate } from "react-router-dom";

const ProfileDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/Login");
  };
  return (
    <div>
      <Menu shadow="md" width={150}>
        <Menu.Target>
          <Avatar />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
          <Menu.Item color="red" onClick={handleSignOut}>
            Sign Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
