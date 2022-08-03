import React, { memo } from "react";
const ChildUseCallBack = ({ value }) => {
  console.log("Child Rerendered");
  return (
    <div>
      {value}
      <h1>Child Component</h1>
    </div>
  );
};

export default memo(ChildUseCallBack);
