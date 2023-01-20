import React from "react";
import { useSelector, useDispatch } from "react-redux";

const AddCount = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const addCount = () => dispatch({ type: "ADD" });
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <button onClick={addCount}>Add To Count</button>
    </div>
  );
};

export default AddCount;
