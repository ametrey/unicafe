import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({text, counter}) => <p>{text} {counter}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)


  return (
    <div>
      <Title text="Give feedback" />
      <Button onClick={handleGoodFeedback} text="Good" />
      <Button onClick={handleNeutralFeedback} text="Neutral" />
      <Button onClick={handleBadFeedback} text="Bad" />
      <Title text="Statistics" />
    <Statistics text="Good" counter={good} />
    <Statistics text="Neutral" counter={neutral} />
    <Statistics text="Bad" counter={bad} />


        </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
