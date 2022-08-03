import { forwardRef } from "react";

const ChildImparitive = (props, ref) => {
  return (
    <>
      <input ref={ref} />
      <div>This is a ChildImparitive Component</div>
    </>
  );
};
export default forwardRef(ChildImparitive);
