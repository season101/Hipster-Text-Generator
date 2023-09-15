import { nanoid } from 'nanoid';
import { useState } from 'react';
import text from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [textArray, setTextArray] = useState([]);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTextArray(text.slice(0, parseInt(count)));
  };
  return (
    <section className="section-center">
      <h4>Hipster Text Generator :{')'}</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <article className="lorem-text">
        {textArray.map((textArr) => {
          return <p key={nanoid()}>{textArray}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
