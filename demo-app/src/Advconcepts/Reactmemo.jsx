import React, { useState, memo } from 'react';

const ChildComponent = memo(({ count }) => {
  console.log('Child Component Rendered');
  return <h1>Count: {count}</h1>;
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
