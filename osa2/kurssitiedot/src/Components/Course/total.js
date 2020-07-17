import React from 'react'

const Total = ({ course }) => {
    // Get total amount of exercises
    const totalExerises = course.parts
        .reduce((prev, curr) => prev + curr.exercises, 0);

    /**
     * Tehtävä 2.3* - Oli vähän epäselvä että tarkoittiko se tuota ylempää vai pitikö minun tehädä tämä myös?
     * Olisin voinut tehdä saman vaikka 'course.parts.length' mutta koska ohjeissa sanottiin reduce joten ¯\_(ツ)_/¯
     */
    const totalParts = course.parts
        .reduce((prev) => prev + 1, 0);

    return (
        <span style={{ "fontWeight": "bold" }}>
            <p>Total of {totalExerises} exerises</p>
            <p>Total of {totalParts} parts</p>
        </span>
    )
}

export default Total
