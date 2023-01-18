import React from "react";
import { users } from "../../../types/randomUser";
import { Item } from "./userList.styles";

export const UserItem = ({ user }: { user: users }) => {
  return (
    <Item>
      <div className="photo">
        <img loading="lazy" src={user.picture.large} alt="user image" />
        <span>{user.login.username}</span>
      </div>
      <div className="infos">
        <div>
          <h2>
            {user.name.first} {user.name.last}
          </h2>
        </div>
        <span>{user.email}</span>
        <div className="nickname">
          <span>{user.registered.age} anos</span>
        </div>
      </div>
    </Item>
  );
};
