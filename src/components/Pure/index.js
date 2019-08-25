import React, {Component, PureComponent, memo, useState, useCallback} from "react";

import {shallowCompare} from "./utils";

export class CParent extends Component {
    state = {
        toggleReRender: false
    }

    constructor(props) {
        super(props);
        this._toggle = this._toggle.bind(this);
    }

    render() {
        console.log("CParent")
        return (
            <div>
                <CPureChild index={0} />
                <WCPureChild getIndex={this._getIndex} />
                <FChild index={2} />
                <FPureChild index={3} />
                <FDeepPureChild index={4} obj={{letter:"x"}} />
                <CDeepPureChild index={5} obj={{letter:"y"}} />
                <button onClick={this._toggle}>Toggle Pure</button>
            </div>
        );
    }

    _getIndex() {
        return 1;
    }

    _toggle() {
        this.setState(function(curState) {
            return {
                toggleReRender: !curState,
            };
        });
    }
}

export function FParent() {
    console.log("FParent");
    const [toggleReRender, setToggleReRender] = useState(false);

    function _toggle() {
        setToggleReRender(!toggleReRender);
    }

    function _getIndex() {
        return 1;
    }

    const memoizedGetIndex = useCallback(_getIndex, []);

    return (
        <div>
            <CPureChild index={0} />
            <WCPureChild getIndex={memoizedGetIndex} />
            <FChild index={2} />
            <FPureChild index={3} />
            <FDeepPureChild index={4} obj={{letter:"x"}} />
            <CDeepPureChild index={5} obj={{letter:"y"}} />
            <button onClick={_toggle}>Toggle Impure</button>
        </div>
    );
}

class CPureChild extends PureComponent {
    render() {
        console.log("CPureChild " + this.props.index);
        return (
            <div>
                Child {this.props.index}
            </div>
        );
    }
}

class CDeepPureChild extends Component {
    shouldComponentUpdate(nextProps) {
        // debugger;
        return this.props.obj.letter !== nextProps.obj.letter || !shallowCompare(this.props, nextProps);
    }

    render() {
        console.log("CDeepPureChild " + this.props.index + this.props.obj.letter);
        return (
            <div>
                Child {this.props.index} {this.props.obj.letter}
            </div>
        );
    }
}

class WCPureChild extends PureComponent {
    render() {
        console.log("WCPureChild " + this.props.getIndex());
        return (
            <div>
                Child {this.props.getIndex()}
            </div>
        );
    }
}

function FChild(props) {
    console.log("FChild " + props.index);
    return (
        <div>
            Child {props.index}
        </div>
    );
}

const FPureChild = memo(function (props) {
    console.log("FPureChild " + props.index);
    return (
        <div>
            Child {props.index}
        </div>
    );
});

const FDeepPureChild = memo(function (props) {
    console.log("FDeepPureChild " + props.index + props.obj.letter);
    return (
        <div>
            Child {props.index} {props.obj.letter}
        </div>
    );
}, function propsAreEqual(prevProps, nextProps) {
    // debugger;
    return prevProps.obj.letter === nextProps.obj.letter && shallowCompare(prevProps, nextProps);
});