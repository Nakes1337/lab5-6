import React from "react";

import Avatar from "./Avatar";
class UsersCard extends React.Component {
  render() {
    const { nom } = this.props;

    return (
      <div>
        <Avatar src={nom.picture.large} />
        <div>{`${nom.name.first} ${nom.name.last}`}</div>
      </div>
    );
  }
}

export default UsersCard;
