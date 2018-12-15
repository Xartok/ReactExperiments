import * as React from "react";
import "./MenuItem.css";

export interface IMenuItemProps {
  index?: number;
  isActive?: boolean;
  onItemClicked?: (activatedItemIndex: number) => void;
}

export class MenuItem extends React.Component<IMenuItemProps, object> {
  public render(): React.ReactNode {
    return (
      <span
        className={this.props.isActive ? "active" : ""}
        onClick={this.props.onItemClicked!.bind(this, this.props.index!)}>
        {this.props.children}
      </span>
    );
  }
}