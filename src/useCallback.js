import { useCallback, useState } from "react";
import ChildUseCallBack from "./ChildCallback";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);
  const getValue = useCallback(() => {
    console.log("getValue called");
    setItem(1);
  }, [item]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => getValue()}>get Value</button>
      <ChildUseCallBack value={getValue} />
    </div>
  );
};

export default UseCallback;
