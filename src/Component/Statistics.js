


const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {


  const all = good + neutral + bad


  if (all === 0) {

    return <p>No feedback given</p>

  }


  const average = () => (good - bad) / all
  const positive = () => (good * 100) / all

  return (

    <div>
      <table>
        <tbody>
          <Statistic text='Good' value={good} />
          <Statistic text='Neutral' value={neutral} />
          <Statistic text='Bad' value={bad} />
          <Statistic text='All' value={all} />
          <Statistic text='Average' value={average()} />
          <Statistic text='Positive' value={positive()} />
        </tbody>
      </table>

    </div>

  )
}

export { Statistics }