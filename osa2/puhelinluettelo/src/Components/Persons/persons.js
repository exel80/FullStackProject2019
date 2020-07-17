import React from 'react'

const Persons = ({ persons, search, pushDelete }) => {
    return (
        <div>
            {
                persons && persons.filter(person => person.name.toLocaleLowerCase().includes(search)).map((person, index) => (
                    <p key={index} onClick={() => pushDelete(person)}>
                        {person.name} {person.phone ? person.phone : "Not found"}
                    </p>
                ))
            }
        </div>
    )
}

export default Persons
