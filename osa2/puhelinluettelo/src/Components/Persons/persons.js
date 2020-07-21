import React from 'react'

const Persons = ({ persons, search, pushDelete }) => {

    const delHandler = (person) => {
        if (window.confirm(`Are you sure you want to delete ${person.name}?`))
            pushDelete(person.id)
    }

    return (
        <ul>
            {
                persons && persons.filter(person => person.name?.toLocaleLowerCase().includes(search)).map((person, index) => (
                    <li>
                        <p key={index}>
                            {person.name} {person.phone ? person.phone : "Not found"}
                            <button
                                onClick={() => delHandler(person)}
                                style={{ "marginLeft": "5px" }}
                            >
                                Delete
                            </button>
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Persons
