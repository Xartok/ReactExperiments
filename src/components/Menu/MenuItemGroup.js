import React, {Children, cloneElement, PureComponent} from "react";

import "./MenuItemGroup.css";

export class MenuItemGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    return (
      <div className={"menu-item-group"}>
        {this._renderChildren()}
      </div>
    );
  }

  _renderChildren() {
    const children = Children.toArray(this.props.children).filter(Boolean);

    return Children.map(children, (child, index) => (
      cloneElement(child, {
        index,
        isActive: this.state.activeIndex === index,
        onItemClicked: (activatedItemIndex) => this.setState({activeIndex: activatedItemIndex}),
      })
    ));
  }
}