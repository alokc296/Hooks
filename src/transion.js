/* React 18 has introduced a key new concept known as “concurrency”.
 Concurrency involves the simultaneous execution of multiple state updates,
  which is arguably the most important feature in React 18. Along with concurrency, 
  there are two new hooks introduced by React 18 known as the UseTransition() and the UseDeferredValue() hook. 
  They both help with de-prioritizing state updates, but the question is, when should they be used?
 */

import { useEffect, useState, useTransition } from "react";

export default function Transion() {
  const [isPending, startTransition] = useTransition();
  const [num, setNum] = useState(0);
  const [multiples, setMultiples] = useState();

  function generateMultiples(num) {
    startTransition(() => {
      setMultiples(
        Array.from(Array(50).keys()).map((i) => (
          <div key={i} className={"m-0 p-0 col-1"}>
            {num * (i + 1)}
          </div>
        ))
      );
    });
  }

  useEffect(() => {
    if (num > 0) {
      generateMultiples(num);
    }
  }, [num]);

  const onChange = (e) => {
    setNum(Number(e.target.value));
  };

  return (
    <main className="container my-5">
      <input type="text" name="num" id="num" value={num} onChange={onChange} />
      <span className="ms-5 mt-3 h3">1,000 multiples of number: {num}</span>
      <div className="multiples row mt-5">
        {isPending ? "Loading..." : multiples}
      </div>
    </main>
  );
}
