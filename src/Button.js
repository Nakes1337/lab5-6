import React from "react";

class Button extends React.Component {
  render() {
    const { label, start } = this.props;
    return (
      <div>
        <button type="button" onClick={start} class="btn btn-outline-primary">
          {" "}
          {label}{" "}
        </button>
      </div>
    );
  }
}

export default Button;
