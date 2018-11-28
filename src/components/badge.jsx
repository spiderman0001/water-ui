import React, { Component } from "react";
import "./badge.less";

class Badge extends Component {
  render() {
    let { children, count, max, color } = this.props;
    let style = {
      background: color || "red"
    };
    return (
      <div className="water-badge">
        {children}
        <div className="circle-info" style={style}>
          {count > max ? max + "+" : count}
        </div>
      </div>
    );
  }
}
export default Badge;
