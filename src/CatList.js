import React from "react";

export default function CatList({ cats, addCatToCoolList }) {
  return (
    <>
      <h1>All Cats</h1>
      <div style={{ display: "flex" }}>
        {cats.map((cat) => (
          <div key={cat.id}>
            <img src={cat.url} style={{ width: "100px", height: "100px" }} />
            <button onClick={() => addCatToCoolList(cat.id)}>Add</button>
          </div>
        ))}
      </div>
    </>
  );
}
