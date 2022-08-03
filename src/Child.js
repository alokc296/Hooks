import { useState } from "react";
import { createContext } from "react";
import SuperChild from "./SuperChild";
const InputName = createContext();
const InputCity = createContext();
const Child = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  return (
    <>
      <h1>Hello This is Child Component</h1>
      <input
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        name="location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <InputName.Provider value={name}>
        <InputCity.Provider value={location}>
          <SuperChild />
        </InputCity.Provider>
      </InputName.Provider>
    </>
  );
};

export default Child;
export { InputName, InputCity };
