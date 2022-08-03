import React, { useCallback, useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);

  const multicount = useMemo(() => {
    console.log("multicount called");
    return count * 5;
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Item : {item}</h1>
      <h1>Multicount : {multicount}</h1>
      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setItem(item * 10)}>update item</button>
    </div>
  );
};

export default UseMemo;
