import React, { Fragment, useState, useEffect, useRef } from "react";
import "./App.css";
import Input from "./Input";

function Hello(props) {
  const [isTrue, setIsTrue] = useState(true);
  const [crowd, setCrowd] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  // refs
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);

  const toggleTrue = () => {
    setIsTrue(!isTrue);
  };

  useEffect(() => {
    console.log(`useEffect fired!`);

    let people = [
      { id: 1, firstName: "John", lastName: "Doe", dob: "1990-01-01" },
      { id: 2, firstName: "Jane", lastName: "Smith", dob: "1992-02-02" },
      { id: 3, firstName: "Alice", lastName: "Johnson", dob: "1995-03-03" },
    ];
    setCrowd(people);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (lastName !== "") {
      addPerson(firstName, lastName, dob);
    }
  };

  const addPerson = (newFirst, newLast, newDOB) => {
    let newPerson = {
      id: crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      dob: newDOB,
    };

    const newList = crowd.concat(newPerson);

    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });

    setCrowd(sorted);
    setFirstName("");
    setLastName("");
    setDob("");

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    dobRef.current.value = "";
  };

  return (
    <>
      {" "}
      {/* This is a Fragment tag */}
      <hr />
      <h1 className="h1-green">{props.msg}</h1>
      <hr />
      {isTrue && (
        <>
          <p>The current value of isTrue is true</p>
        </>
      )}
      <hr />
      {isTrue ? <p>Is true</p> : <p>Is false</p>}
      <hr />
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        Toggle isTrue
      </a>
      <hr />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          title="First Name"
          type="text"
          name="first-name"
          ref={firstNameRef}
          autoComplete="first-name-new"
          className="form-control"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <Input
          title="Last Name"
          type="text"
          name="last-name"
          ref={lastNameRef}
          autoComplete="last-name-new"
          className="form-control"
          onChange={(event) => setLastName(event.target.value)}
        />
        <Input
          title="Date of Birth"
          type="date"
          name="dob"
          ref={dobRef}
          autoComplete="dob-new"
          className="form-control"
          onChange={(event) => setDob(event.target.value)}
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      <div>
        First Name: {firstName} <br />
        Last Name: {lastName} <br />
        Date of Birth: {dob} <br />
      </div>
      <hr />
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((person) => (
          <li key={person.id} className="list-group-item">
            {person.firstName} {person.lastName} - {person.dob}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Hello;
