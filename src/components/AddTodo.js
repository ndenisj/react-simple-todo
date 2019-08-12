import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", padding: "10px 0" }}
      >
        <input
          type="text"
          style={{ flex: "10", padding: "10px" }}
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="SUBMIT"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
