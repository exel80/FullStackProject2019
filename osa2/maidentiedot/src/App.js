import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { CountrySearch, CountryList } from './Components/Countries'

const App = () => {
	const [search, setSearch] = useState("")
	const [country, setCountry] = useState([])

	const onChange = (e) => setSearch(e.target.value)

	useEffect(() => {
		// Do not serach when input is empty
		if (search.length <= 0) return

		axios.get(`https://restcountries.eu/rest/v2/name/${search}`)
			.then(resp => setCountry(resp.data))
	}, [search])

	return (
		<div>
			<CountrySearch search={search} onChange={onChange.bind(this)} />

			<CountryList data={country} serach={search} />
		</div>
	)
}

export default App