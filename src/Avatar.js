import React from "react";

class Avatar extends React.Component {
  render() {
    const { src } = this.props;

    return <img src={src} alt="Avat" />;
  }
}

export default Avatar;
