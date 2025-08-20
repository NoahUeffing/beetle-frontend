import React, { Component, Fragment } from "react";
import "./AppClass.css";
import Input from "./Input";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.firstNameRef = React.createRef(null);
    this.lastNameRef = React.createRef(null);
    this.dobRef = React.createRef(null);

    this.state = {
      isTrue: false,
      crowd: [],
    };
  }

  setFirstName(newName) {
    this.setState({ firstName: newName });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.firstName !== "") {
      this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
    }
  };

  addPerson(newFirst, newLast, newDOB) {
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      dob: newDOB,
    };

    const newList = this.state.crowd.concat(newPerson);

    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });

    this.setState({ crowd: sorted, firstName: "", lastName: "", dob: "" });

    this.firstNameRef.current.value = "";
    this.lastNameRef.current.value = "";
    this.dobRef.current.value = "";
  }

  componentDidMount() {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      crowd: [
        { id: 1, firstName: "John", lastName: "Doe", dob: "1990-01-01" },
        { id: 2, firstName: "Jane", lastName: "Smith", dob: "1992-02-02" },
        { id: 3, firstName: "Alice", lastName: "Johnson", dob: "1995-03-03" },
      ],
    });
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({ isTrue: false });
    } else {
      this.setState({ isTrue: true });
    }
  };

  render() {
    return (
      <>
        {" "}
        {/* This is a Fragment tag */}
        <hr />
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue && (
          <>
            <p>The current value of isTrue is true</p>
          </>
        )}
        <hr />
        {this.state.isTrue ? <p>Is true</p> : <p>Is false</p>}
        <hr />
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          Toggle isTrue
        </a>
        <hr />
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <Input
            title="First Name"
            type="text"
            name="first-name"
            ref={this.firstNameRef}
            autoComplete="first-name-new"
            className="form-control"
            onChange={(event) => this.setFirstName(event.target.value)}
          />
          <Input
            title="Last Name"
            type="text"
            name="last-name"
            ref={this.lastNameRef}
            autoComplete="last-name-new"
            className="form-control"
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          />
          <Input
            title="Date of Birth"
            type="date"
            name="dob"
            ref={this.dobRef}
            autoComplete="dob-new"
            className="form-control"
            onChange={(event) => this.setState({ dob: event.target.value })}
          />

          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
        <div>
          First Name: {this.state.firstName} <br />
          Last Name: {this.state.lastName} <br />
          Date of Birth: {this.state.dob} <br />
        </div>
        <hr />
        <h3>People</h3>
        <ul className="list-group">
          {this.state.crowd.map((person) => (
            <li key={person.id} className="list-group-item">
              {person.firstName} {person.lastName} - {person.dob}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
