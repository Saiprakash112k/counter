import React from "react";
const Child = (props) => {
  const ChilkHere = () => {
    props.getData();
  };

  return (
    <>
      <button
        onClick={() => {
          ChilkHere();
        }}
      >
        {props.btName}
      </button>
    </>
  );
};
export default Child;
