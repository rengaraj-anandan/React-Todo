import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="text-center">
        <img
          src={process.env.PUBLIC_URL + "/task.png"}
          style={{ width: "70%" }}
          className="card-img-top"
          alt=""
        />
      </div>
    );
  }
}

export default Header;
