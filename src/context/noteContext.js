import React, { Component, createContext } from "react";

export const NoteContext = createContext();

export class NoteProvider extends Component {
  state = {
    note: [],
  };
  newNote = (item) => {
    this.setState({
      note: [...this.state.note, item],
    });
  };
  editAdd = (item) => {
    const { note } = this.state;
    let temp = note;
    temp[item.id] = item;

    this.setState({ note: temp });
  };
  render() {
    const editAdd = this.editAdd;
    const newNote = this.newNote;
    return (
      <NoteContext.Provider value={{ State: this.state, newNote, editAdd }}>
        {this.props.children}
      </NoteContext.Provider>
    );
  }
}
