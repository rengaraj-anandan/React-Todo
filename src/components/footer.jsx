import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="col text-center mt-2 p-3 border border-dark">
        <div className="row g-3">
          <div className="col">
            <p>
              Open
              <span className="badge bg-secondary">
                {
                  this.props.tasks.filter((task) => task.isComplete === false)
                    .length
                }
              </span>
            </p>
          </div>
          <div className="col">
            <p>
              Total
              <span className="badge bg-secondary">
                {this.props.tasks.length}
              </span>
            </p>
          </div>
          <div className="col">
            <p>
              Complete
              <span className="badge bg-secondary">
                {
                  this.props.tasks.filter((task) => task.isComplete === true)
                    .length
                }
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
