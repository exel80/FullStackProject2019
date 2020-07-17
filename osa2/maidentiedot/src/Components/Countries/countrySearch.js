import React from 'react'

const CountrySearch = ({ search, onChange }) => {
    return (
        <div>
            <label for="search">Find countries </label>
            <input id="search" type="text" value={search} onChange={onChange} />
        </div>
    )
}

export default CountrySearch
