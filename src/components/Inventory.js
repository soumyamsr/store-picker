import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  static propTypes = {
    fishes: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string
    }),
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      user && this.authHandler({ user });
    });
  }

  authHandler = async authData => {
    const store = base.fetch(this.props.storeId, { context: this });
    if (!store.owner) {
      try {
        await base.post(`${this.props.storeId}/owner`, {
          data: authData.user.uid
        });
      } catch (err) {
        console.error("Error!! =>", err);
      }
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logOut = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = <button onClick={this.logOut}>Log Out</button>;
    return !this.state.uid ? (
      <Login authenticate={this.authenticate} />
    ) : this.state.uid !== this.state.owner ? (
      <div>
        <p>Sorry You are not the owner.</p>
        {logout}
      </div>
    ) : (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            keyRef={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            fish={this.props.fishes[key]}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
