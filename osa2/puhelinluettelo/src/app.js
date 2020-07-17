import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Persons, { PersonForm, PersonSearch } from './Components/Persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('+358 ')
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get("http://localhost:3001/persons")
            .then(resp => setPersons(resp.data))
    }, [])

    const pushUpdate = (data) => {
        setPersons(prev => [...prev, data])

        axios.post("http://localhost:3001/persons", data)
            .then((resp) => console.log(resp))
    }

    const pushDelete = (data) => {
        let _persons = persons.filter(p => p.name !== data.name)
        setPersons(_persons)

        //TODO: Remove from JSON server
    }

    const onSubmit = (event) => {
        event.preventDefault()

        // Check if name already exists in phonebook
        if (persons.filter(p => p.name === newName).length >= 1) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        // Check if name is emtpy
        else if (newName.length <= 0) {
            alert('Name cannot be empty')
            return
        }
        // Check if phone is default/empty
        else if (newPhone.trim().length <= 4) {
            alert('Phone number cannot be empty')
            return
        }

        pushUpdate({ name: newName, phone: newPhone })
    }

    const onChange = (event) => {
        event.persist()
        switch (event.target.id) {
            default:
            case "name":
                setNewName(event.target.value)
                break
            case "phone":
                setNewPhone(event.target.value)
                break
            case "search":
                setSearch(event.target.value)
                break
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <PersonSearch search={search} onChange={onChange.bind(this)} />

            <h2>Add a new person</h2>
            <PersonForm newName={newName} newPhone={newPhone} onChange={onChange.bind(this)} onSubmit={onSubmit.bind(this)} />

            <h2>Numbers</h2>
            <Persons search={search} persons={persons} pushDelete={pushDelete.bind(this)} />
        </div>
    )

}

export default App