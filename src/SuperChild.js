import React, { useContext } from "react";
import { InputName, InputCity } from "./Child";
const SuperChild = () => {
  // This is through the useContext Hook.

  const Outvalue = useContext(InputName);
  const OutLocation = useContext(InputCity);
  return (
    <>
      <h1>Hello This is a SuperChild Component</h1>
      {Outvalue}
      <br />
      <br />
      {OutLocation}

      {/* This is through the context Api    
  
  <InputName.Consumer>
        {(firstName) => {
          return (
            <InputCity.Consumer>
              {(cityname) => {
                return (
                  <>
                    <div>
                      <b>{firstName}</b>
                    </div>
                    <br />
                    <div>{cityname}</div>
                  </>
                );
              }}
            </InputCity.Consumer>
          );
        }}
      </InputName.Consumer> */}
    </>
  );
};
export default SuperChild;
