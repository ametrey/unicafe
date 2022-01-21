import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistic = ({text}, {value}) => <p>{text}: {value}</p>

const Statistics = ({ good, neutral, bad }) => {


  const all = good + neutral + bad


  if (all === 0) {

    return <p>No feedback given</p>

  }


  const average = () => (good - bad) / all
  const positive = () => (good * 100) / all

  return (

    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average()}</p>
      <p>Positive %: {positive()}</p>
    </div>

  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  const handleGoodFeedback = () => {
    setGood(good + 1)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
  }

  return (

    <div>
      <Title text="Give feedback" />
      <Button onClick={handleGoodFeedback} text="Good" />
      <Button onClick={handleNeutralFeedback} text="Neutral" />
      <Button onClick={handleBadFeedback} text="Bad" />
      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

