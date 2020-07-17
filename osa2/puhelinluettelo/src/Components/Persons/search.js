import React from 'react'

const PersonSearch = ({ search, onChange }) => (
    <div>
        <label for="search">Filter shown with (name) </label>
        <input id="search" value={search} onChange={onChange} />
    </div>
)

export default PersonSearch;
