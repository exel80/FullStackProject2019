import React, { useState } from 'react'
import CountryWeather from './countryWeather'

const Country = ({ country }) => {
    const [toggle, setToggle] = useState(false)

    const toggleWeather = () => setToggle(!toggle)

    return (
        <div className="country-wrap">
            <div className="country-content">
                <div className="country-text">
                    <img src={country.flag} className="country-flag" alt={country.name} />
                    <h3>{country.name}</h3>
                    <span>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                    </span>

                    <h4>Languages</h4>
                    <ul>
                        {country.languages.map((lang, index) => <li key={index}>{lang.name}</li>)}
                    </ul>
                </div>

                <div className="country-toggle-button" onClick={toggleWeather}>
                    {!toggle ? "Show more" : "Hide"}
                </div>

                { 
                    toggle && <CountryWeather country={country} />
                }
            </div>
        </div>
    )
}


export default Country