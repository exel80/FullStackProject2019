import React from 'react'

const PersonForm = ({ newName, newPhone, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <div className="form-container">
            <label for="name">Name </label>
            <input id="name" value={newName} onChange={onChange} />
            <label for="phone">Phone </label>
            <input id="phone" value={newPhone} onChange={onChange} />
            <button type="submit">add</button>
        </div>
    </form>
)

export default PersonForm;
