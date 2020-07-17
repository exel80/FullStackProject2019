import React from 'react'

import Country from './country'

const ErrorMessages = (data, serach) => {
    // If more then 10 match & search is not empty
    if (data.length > 10 && serach.length > 0)
        return "Too many matches, specify another filter"

    // If data is empty & search is not empty
    else if (data.length <= 0 && serach.length > 0)
        return "Could not found any match"

    // If earch is empty
    else if (serach.length <= 0)
        return ""

    // Passed
    else
        return true
}

const CountryList = ({ data, serach }) => {

    // Handeling warnings/errors
    let error = ErrorMessages(data, serach)
    if (error !== true)
        return error

    console.log(data);

    return data.map((country, index) => <Country key={index} country={country} />)
}

export default CountryList
