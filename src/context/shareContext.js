import React, { Component, createContext } from "react";

export const ShareContext = createContext();

export class ShareProvider extends Component {
  state = {
    share: [],
  };
  newShare = (item) => {
    this.setState({
      share: [...this.state.share, item],
    });
  };

  render() {
    const newShare = this.newShare;
    return (
      <ShareContext.Provider value={{ State: this.state, newShare }}>
        {this.props.children}
      </ShareContext.Provider>
    );
  }
}
