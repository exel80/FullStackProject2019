import React, { useEffect, useState } from 'react'

import axios from 'axios'

const CountryWeather = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const API_KEY = process.env.WEATHERSTACK_API_KEY

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${country.name}`)
            .then(resp => {
                // console.log(resp)
                setWeather(resp.data)
            })
    }, [])

    // Wait until data has been fetched
    if (weather === null)
        return "Loading..."

    const {
        temperature, feelslike, wind_dir, wind_speed,
        weather_descriptions, weather_icons
    } = weather.current

    return (
        <div>
            <h4>Weather in {weather.location.name}</h4>
            <img src={weather_icons[0]} className="weather-icon" alt={weather_descriptions[0]} />
            <ul style={{ "listStyle": "none" }}>
                <li>
                    <strong>Weather:</strong>
                    {weather_descriptions[0]}
                </li>
                <li>
                    <strong>Temperature:</strong>
                    {temperature}&deg;C <small>(feelslike {feelslike}&deg;C)</small>
                </li>
                <li>
                    <strong>Wind:</strong>
                    {wind_speed} mph direction {wind_dir}
                </li>
            </ul>
        </div>
    )
}

export default CountryWeather
