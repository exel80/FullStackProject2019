import React, { useState, useEffect } from 'react'
import noteService from './services'

import Persons, { PersonForm, PersonSearch } from './Components/Persons'
import Notify from './Components/Notify'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('+358 ')
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState([null])

    useEffect(() => {
        noteService
            .getAll()
            .then(resp => setPersons(resp.data))
    }, [])

    const createAction = (data) => {
        noteService
            .create(data)
            .then((resp) => {
                setMessage([`'${resp.data?.name}' has been added`])
                setPersons(prev => [...prev, resp.data])
            })
    }

    const updateAction = (id, phone) => {
        const target = persons.find(p => p.id === id)
        const updatePhone = {...target, phone: phone}

        noteService
            .update(target.id, updatePhone)
            .then(resp => {
                setMessage([`'${target?.name}' has been updated`, 'sandybrown'])
                setPersons(persons.map(p => p.id !== id ? p : updatePhone))
            })
    }

    const deleteAction = (id) => {
        const target = persons.find(p => p.id === id)

        noteService
            .remove(id, target)
            .then(resp => {
                setMessage([`'${target?.name}' has been removed`])
                setPersons(persons.map(p => p.id !== id ? p : resp))
            })
            .catch(error => {
                setMessage(
                    [`the person '${target?.name}' was already deleted from server`, 'red']
                )

                setTimeout(() => {
                    setMessage([null])
                  }, 5000)

                setPersons(persons.filter(p => p.id !== id))
            })
    }

    const onSubmit = (event) => {
        event.preventDefault()

        // Check if name already exists in phonebook.
        // If exist, confirm if user want to update phone number
        if (persons.filter(p => p.name === newName).length >= 1) {
            if (!window.confirm(`${newName} is already added to phonebook. Do you want to update phone number?`))
                return

            const target = persons.find(p => p.name === newName)

            updateAction(target.id, newPhone)
        }
        // Check if name is emtpy
        else if (newName.length <= 0)
            alert('Name cannot be empty')
        // Check if phone is default/empty
        else if (newPhone.trim().length <= 4)
            alert('Phone number cannot be empty')
        else
            createAction({ name: newName, phone: newPhone })
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
            <Notify message={message} />

            <h2>Phonebook</h2>
            <PersonSearch search={search} onChange={onChange.bind(this)} />

            <h2>Add a new person</h2>
            <PersonForm newName={newName} newPhone={newPhone} onChange={onChange.bind(this)} onSubmit={onSubmit.bind(this)} />

            <h2>Numbers</h2>
            <Persons search={search} persons={persons} pushDelete={deleteAction.bind(this)} />
        </div>
    )

}

export default App