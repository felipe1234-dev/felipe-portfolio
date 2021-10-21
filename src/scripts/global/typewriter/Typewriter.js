// Code taken from here: https://github.com/lamyfarai/react-typing-effect/blob/master/src/lib/index.js
// But I've made some changes.
// Please, star this repository!

import React, { Component } from "react";

import Cursor from "./Cursor";

export default class TypingEffect extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            index: 0,
            displayText: ""
        };

        this.getRawText = this.getRawText.bind(this);
        this.type = this.type.bind(this);
        this.startTyping = this.startTyping.bind(this);
    }

    componentDidMount() {
        this.startTyping();
    }

    componentWillUnmount() {
        this._timeout && clearTimeout(this._timeout);
    }

    startTyping() {
        this._timeout = setTimeout(() => {
            this.type();
        }, this.props.typingDelay);
    }

    getRawText() {
        const { text } = this.props;
        return typeof text === "string" ? [text] : [...text];
    }

  type() {
    const { onEndCallback } = this.props;
    let { index, displayText } = this.state;
    let text = this.getRawText()[index];

    if (text.length > displayText.length) {
        displayText = text.substr(0, displayText.length+1);
      
        this.setState({ displayText }, () => {
            this._timeout = setTimeout(() => {
                this.type();
            }, this.props.speed);
        });

    } 
    else {
        onEndCallback();
    }
  }

  render() {
    const {
        speed,
        typingDelay,
        staticText,
        text,
        cursor,
        displayTextRenderer,
        cursorClassName,
        cursorRenderer,
        ...otherProps
    } = this.props;
    const { displayText, index } = this.state;

    return (
        <span {...otherProps}>
            {staticText ? (
                <span>
                    {staticText}&nbsp;
                </span>
            ) : null}

            <div style={{ display: "inline-block" }}>
                {displayTextRenderer ? displayTextRenderer(displayText, index) : displayText}
            </div>

            <Cursor
                cursor={cursor}
                cursorRenderer={cursorRenderer}
                className={cursorClassName}
            />
        </span>
    );
  }
}

TypingEffect.defaultProps = {
    speed: 200,
    typingDelay: 2500,
    onEndCallback: function() {
        return;
    }
};