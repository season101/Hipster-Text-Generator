import { nanoid } from 'nanoid';
import { useState } from 'react';
import text from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [textArray, setTextArray] = useState([]);
  const handleChange = (e) => {
    if (e.target.value < 0 || e.target.value > 8) return;
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTextArray(text.slice(0, count));
  };
  return (
    <>
      <h2>Lorem Ipsum Starter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          id="number"
          value={count}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <section>
        {textArray.map((textArr) => {
          return <article key={nanoid()}>{textArray}</article>;
        })}
      </section>
    </>
  );
};
export default App;
