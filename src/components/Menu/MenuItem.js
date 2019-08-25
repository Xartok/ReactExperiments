import React, {PureComponent} from "react";

import "./MenuItem.css";

export class MenuItem extends PureComponent {
  render() {
    return (
      <span
        className={this._renderClassName()}
        onClick={this._onItemClicked}>
        {this.props.children}
      </span>
    );
  }

  _renderClassName = () => {
    const defaultValue = "menu-item";
    const rest = this.props.isActive ? "active" : "";

    return `${defaultValue} ${rest}`;
  }

  _onItemClicked = () => {
    this.props.onItemClicked(this.props.index);
  }
}