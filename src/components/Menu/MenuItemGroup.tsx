import * as React from "react";
import {Children, cloneElement, Component, ReactChild, ReactElement, ReactNode} from "react";
import {IMenuItemProps} from "./MenuItem";
import "./MenuItemGroup.css";

interface IMenuGroupProps {
  children: Array<(ReactChild | boolean)>;
}

interface IMenuGroupState {
  activeIndex: number;
}

export class MenuItemGroup extends Component<IMenuGroupProps, IMenuGroupState> {
  constructor(props: IMenuGroupProps) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  public render(): ReactNode {
    return (
      <div className={"menu-item-group"}>
        {this.renderChildren()}
      </div>
    );
  }

  private renderChildren() {
    const children = Children.toArray(this.props.children).filter(Boolean);

    return Children.map(children, (child, index) => (
      cloneElement(child as ReactElement<IMenuItemProps>, {
        index,
        isActive: this.state.activeIndex === index,
        onItemClicked: (activatedItemIndex: number) => this.setState({activeIndex: activatedItemIndex}),
      })
    ));
  }
}