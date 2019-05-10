import React, { useState } from "react"
import ReactDOM from "react-dom"

const Statistic = props => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td> {props.stats} {props.suffix}</td>
    </tr>
  )
}

const Stats = ({ stats }) => {
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

  if (yhteensa <= 0)
    return <p>Ei yhtään palautetta annettu</p>

  return (
    <table>
      <tbody>
        <Statistic text='hyvä' stats={stats[0].arvo} />
        <Statistic text='neutraali' stats={stats[1].arvo} />
        <Statistic text='huono' stats={stats[2].arvo} />
        <Statistic text='yhteensä' stats={yhteensa} />
        <Statistic text='keskiarvo' stats={yhteensa > 0 ? keskiarvo / yhteensa : 0} />
        <Statistic text='positiivisia' stats={yhteensa > 0 ? (positiivisia / yhteensa) * 100 : 0} suffix='%' />
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>{text}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = [{ nimi: 'hyvä', arvo: good }, { nimi: 'neutraali', arvo: neutral }, { nimi: 'huono', arvo: bad }]

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali" />
      <Button handleClick={() => setBad(bad + 1)} text="huono" />

      <h1>statistiikkaa</h1>
      <Stats stats={stats} />
    </div>
  )
}
// <Stats stats={[{nimi: 'hyvä', arvo: good}, {nimi: 'neutraali', arvo: neutral}, {nimi: 'huono', arvo: bad}]} />
ReactDOM.render(<App />, document.getElementById("root"))
