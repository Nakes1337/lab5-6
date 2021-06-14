import React from "react";
import UsersCard from "./UserCard";

class UsersList extends React.Component {
  render() {
    const { user } = this.props;
    return <div>{user && user.map((u) => <UsersCard nom={u} />)}</div>;
  }
}

export default UsersList;
