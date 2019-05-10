import React, { useState } from "react"
import ReactDOM from "react-dom"

const Stats = ({stats}) => {
  const tilasto = stats.map((value) => <p>{value.nimi}: {value.arvo}</p>)
  const yhteensa = stats.reduce((prev, next) => prev + next.arvo, 0)

  const keskiarvo = stats.reduce((prev, next) => {
    if (next.nimi === "huono")
      prev = prev - next.arvo
    else if (next.nimi !== "neutraali")
      prev = prev + next.arvo

    return prev
  }, 0)

  const positiivisia = stats.reduce((prev, next) => {
    if (next.nimi === "hyvä")
      prev = prev + next.arvo

    return prev
  }, 0)

  return (
    <>
      <p>{tilasto}</p>
      <p>yhteensä: {yhteensa}</p>
      <p>keskiarvo: {yhteensa > 0 ? keskiarvo/yhteensa : 0}</p>
      <p>positiivisia: {yhteensa > 0 ? (positiivisia/yhteensa)*100 : 0} %</p>
    </>
  )
}

const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>{text}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali" />
      <Button handleClick={() => setBad(bad + 1)} text="huono" />

      <h1>statistiikkaa</h1>
      <Stats stats={[{nimi: 'hyvä', arvo: good}, {nimi: 'neutraali', arvo: neutral}, {nimi: 'huono', arvo: bad}]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
