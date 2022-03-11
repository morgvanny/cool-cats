import React from "react";

export default function CoolCatList({ cats, removeCatFromCoolList }) {
  return (
    <>
      <h1>Cool Cats</h1>
      <div style={{ display: "flex" }}>
        {cats.map((cat) => (
          <div key={cat.id}>
            <img src={cat.url} style={{ width: "100px", height: "100px" }} />
            <button onClick={() => removeCatFromCoolList(cat.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
