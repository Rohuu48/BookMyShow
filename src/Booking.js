import React from "react";
import { withRouter } from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bookTickets } from "./action/action";
import { Redirect } from "react-router-dom";
const mapStateToProps = store => {
  return {
    movies: store.movies
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      bookTickets
    },
    dispatch
  );
};
class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      ID: "",
      phno: "",
      dob: "",
      address: "",
      data: "",
      dataem: "",
      dataph: ""
    };
  }
  componentDidMount() {
    console.log(
      this.props.match.params.id1,
      this.props.match.params.id2,
      this.props.match.params.id3,
      this.props.movies
    );
    this.props.movies.movies.map(item => {
      console.log(item.data(), "gf");
    });
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (
      reg.test(this.state.email) &&
      this.state.name.length > 1 &&
      re.test(this.state.phno)
    ) {
      console.log("true");
      return true;
    } else {
      console.log("false");

      return false;
    }
  };

  addUser = e => {
    e.preventDefault();
    var a = this.validate();

    if (a) {
      const db = firebase.firestore();

      const userRef = db.collection("User").add({
        name: this.state.name,
        email: this.state.email,
        gender: this.state.gender,
        ID: this.props.match.params.id2,
        phno: this.state.phno,
        dob: this.state.dob,
        address: this.state.address
      });

      this.setState({
        name: "",
        email: "",
        gender: "",

        phno: "",
        dob: "",
        address: ""
      });
      return <Redirect to="/thriller" />;
    } else {
      this.call();
    }
  };
  call = () => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (re.test(this.state.phno) === false) {
      this.setState({
        dataph: "Invalid Phone No"
      });
    }
    if (reg.test(this.state.email) === false) {
      this.setState({
        dataem: "Invalid EmailId"
      });
    }
    if (this.state.name.length < 2) {
      this.setState({
        data: "Wrong Name. Length must be greater than 2."
      });
    }
  };
  handleChange = e => {
    this.setState({ avatar: e.target.files[0] });
  };
  render() {
    return (
      <form onSubmit={this.addUser}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={this.updateInput}
            value={this.state.name}
          />
          {this.state.data}
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            placeholder="address"
            onChange={this.updateInput}
            value={this.state.address}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            placeholder="gender"
            onChange={this.updateInput}
            value={this.state.gender}
          />
        </label>
        <br />

        <label>
          Phone No:
          <input
            type="text"
            name="phno"
            placeholder="Phone no"
            onChange={this.updateInput}
            value={this.state.phno}
          />
          {this.state.dataph}
        </label>
        <br />
        <label>
          DOB:
          <input
            type="text"
            name="dob"
            placeholder="Date of Birth"
            onChange={this.updateInput}
            value={this.state.dob}
          />
        </label>
        <br />
        <label>
          Email Id:
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.updateInput}
            value={this.state.email}
          />
          {this.state.dataem}
        </label>
        <br />
        <label>
          <button
            type="submit"
            onClick={() =>
              this.props.bookTickets(
                `${this.props.match.params.id1}`,
                `${this.props.match.params.id2}`,
                `${this.props.match.params.id3}`
              )
            }
          >
            Submit
          </button>
        </label>
      </form>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Booking)
);
