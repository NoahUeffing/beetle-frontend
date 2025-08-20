import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

function Hello(props) {
    const [isTrue, setIsTrue] = useState(true)
    const [crowd, setCrowd] = useState([]);

    const toggleTrue = () => {
        setIsTrue(!isTrue)
    }

    useEffect(() => {
        console.log(`useEffect fired!`);

        let people = [
            { id: 1, firstName: 'John', lastName: 'Doe', dob: '1990-01-01' },
            { id: 2, firstName: 'Jane', lastName: 'Smith', dob: '1992-02-02' },
            { id: 3, firstName: 'Alice', lastName: 'Johnson', dob: '1995-03-03' }
        ]
        setCrowd(people);
    }, []);

    return (
        <> {/* This is a Fragment tag */}
            <hr />
            <h1 className='h1-green'>{props.msg}</h1>
            <hr />
            {isTrue && 
                <>
                    <p>The current value of isTrue is true</p>
                </>
            }
            <hr />
            {isTrue
            ?  <p>Is true</p>
            : <p>Is false</p>
            }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>
            <hr />
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map(person => (
                    <li key={person.id} className="list-group-item">
                        {person.firstName} {person.lastName} - {person.dob}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Hello;
