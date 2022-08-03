import "./styles.css";
// import Transion from "./transion";
import Child from "./Child";
import ParentImparative from "./ParentImparitive";
import Todos from "./useReducer";
import Memo from "./useMemo";
import UseCallback from "./useCallback";

export default function App() {
  return (
    <div className="App">
      <Child />
      <ParentImparative />
      <br />
      <br />
      <Todos />
      <Memo />
      <UseCallback />
      {/* <Transion />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
