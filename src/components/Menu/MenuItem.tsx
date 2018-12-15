import * as React from "react";
import "./MenuItem.css";

export interface IMenuItemProps {
  index?: number;
  isActive?: boolean;
  onItemClicked?: (activatedItemIndex: number) => void;
}

export class MenuItem extends React.PureComponent<IMenuItemProps, object> {
  public render(): React.ReactNode {
    return (
      <span
        className={this.renderClassName()}
        onClick={this.onItemClicked}>
        {this.props.children}
      </span>
    );
  }

  private renderClassName = () => {
    const defaultValue = "menu-item";
    const rest = this.props.isActive ? "active" : "";

    return `${defaultValue} ${rest}`;
  }

  private onItemClicked = () => {
    this.props.onItemClicked!(this.props.index!);
  }
}