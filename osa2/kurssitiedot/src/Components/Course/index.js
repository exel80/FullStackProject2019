import React from 'react'

import Part from './part'
import Total from './total'
import Header from '../Header'

const Content = ({ course }) => {
    const partComps = course.parts
        .map((part, index) => <Part key={index} part={part} />)

    return (
        <div>
            <Header course={course} />      

            { partComps }

            <Total course={course} />
        </div>
    )
}

export default Content