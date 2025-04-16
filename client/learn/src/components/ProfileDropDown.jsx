// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar, Text } from "@mantine/core";
import { Menu } from "@mantine/core";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/Slice/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Bookmark, LogOut, User, BookOpen } from "lucide-react";
import { getCookie } from "../utils/utils";

const ProfileDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/Login");
  };
  return (
    <div>
      <Menu shadow="md" width={300}>
        <Menu.Target>
          <Avatar />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Profile</Menu.Label>

          <Link to="/profile">
            <Menu.Item color="blue" leftSection={<User size={16} />}>
              Profile
            </Menu.Item>
          </Link>

          <Link to="/Bookmark">
            <Menu.Item leftSection={<Bookmark size={16} />}>Bookmark</Menu.Item>
          </Link>

          <Link to="/ReadingHistory">
            <Menu.Item leftSection={<BookOpen size={16} />}>
              Reading History
            </Menu.Item>
          </Link>
          <hr />

          <Menu.Item
            leftSection={<LogOut size={16} />}
            color="red"
            onClick={handleSignOut}
          >
            Sign Out
          </Menu.Item>
          <Text size="sm" className="text-center">
            {getCookie("email")}{" "}
          </Text>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
