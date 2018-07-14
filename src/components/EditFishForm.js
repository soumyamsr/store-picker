import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    event.preventDefault();
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.keyRef, updatedFish);
  };
  render() {
    const fish = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={fish.price}
        />
        <select name="status" value={fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          placeholder="Description"
          onChange={this.handleChange}
          value={fish.desc}
        />
        <input
          type="text"
          name="image"
          value={fish.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.keyRef)}>
          Delete Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
