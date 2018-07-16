import React, { Component } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  storeInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };
  goToStore = event => {
    event.preventDefault();
    const storeName = this.storeInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          ref={this.storeInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡ </button>
      </form>
    );
  }
}

export default StorePicker;
