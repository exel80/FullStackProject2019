import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVotes = ({points}) => {

  var i
  for (i in points) {
    console.log(highest);
    
    if (points[i] > highest) {
      highest = points[i]
      
    }
  }

  console.log(highest, points[i], i)
  

  console.log("isoin ->", '');

  return <p>asd</p>
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({})

  const randomNext = (anecdotes) =>
    Math.round(0 + Math.random() * ((anecdotes.length - 1) - 0))

  const setNewPoints = () =>  {
    const copy = {...points}
    if (!copy[selected])
      copy[selected] = 1
    else
      copy[selected] += 1

    setPoints({...copy})
  }

  const mostVotes = () => {
    for (let i = 0; i < 3; i++)
      console.log(points[0]);
      
    return <p>asd</p>
  }

  const getPoints = () => 
    <p>has {points[selected] === undefined ? 0 : points[selected]} vote(s)</p>
    
  console.log("->",points);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]} {selected}</p>
      {getPoints()} 
      <p>
        <button onClick={() => setNewPoints()}>vote</button>
        <button onClick={() => setSelected( randomNext(anecdotes) )}>Next (random) >></button>
      </p>

      <h1>Anecdote with most votes</h1>
      <MostVotes points={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)