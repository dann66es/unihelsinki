import { useState } from 'react';


const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </div>
  );
};



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {

    const updatedGood  = good + 1
    setGood(updatedGood)

  } 
  const handleNeutral = () => {

    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)


  }

  const handleBad = () => {

    const updatedBad = bad + 1
    setBad(updatedBad)

  }

  const all = good + neutral + bad;


  let content;
  if (all > 0) {
  content = <Statistics good={good} neutral={neutral} bad={bad} />;
  } else {
   content = <p>No feedback given</p>;

  }




  return (
    <div>
    <h1>Give Feedback </h1>
    <button onClick={handleGood}>Good</button>
    <button onClick={handleNeutral}>Neutral</button>
    <button onClick={handleBad}>Bad</button>

    {content}


 
    </div>
  );
};

export default App;