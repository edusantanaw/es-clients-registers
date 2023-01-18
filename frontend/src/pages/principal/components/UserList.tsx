import React from "react";
import { users } from "../../../types/randomUser";
import { UserItem } from "./UserItem";
import { List } from "./userList.styles";

function UserList({ list }: { list: users[] }) {
  return (
    <List>
      {list && list.map((user, i) => <UserItem key={i} user={user} />)}
    </List>
  );
}

export default UserList;
