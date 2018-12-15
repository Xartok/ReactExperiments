import * as React from "react";
import {Children, cloneElement, Component, Fragment, ReactChild, ReactElement, ReactNode} from "react";
import {IMenuItemProps} from "./MenuItem";

interface IMenuGroupProps {
  children: ReactChild[];
}

interface IMenuGroupState {
  activeIndex: number;
}

export class MenuGroup extends Component<IMenuGroupProps, IMenuGroupState> {
  constructor(props: IMenuGroupProps) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  public render(): ReactNode {
    return (
      <Fragment>
        {this.renderChildren()}
      </Fragment>
    );
  }

  private renderChildren() {
    return Children.map(this.props.children, (child, index) => (
      cloneElement(child as ReactElement<IMenuItemProps>, {
        index,
        isActive: this.state.activeIndex === index,
        onItemClicked: (activatedItemIndex: number) => this.setState({activeIndex: activatedItemIndex}),
      })
    ));
  }
}