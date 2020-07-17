import React from 'react'

import courseJSON from './Components/Course/data/course.json'

import Course from './Components/Course'

const App = () => courseJSON.map((cour, index) => <Course key={index} course={cour} />)

export default App