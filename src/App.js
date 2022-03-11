import logo from "./logo.svg";
import "./App.css";
import CatList from "./CatList";
import CoolCatList from "./CoolCatList";
import { useState, useEffect } from "react";

function App() {
  const [cats, setCats] = useState([]);
  const [coolCatIds, setCoolCatIds] = useState([]);

  const coolCats = cats.filter((cat) => coolCatIds.includes(cat.id));

  useEffect(() => {
    //pretend i'm fetching cats from a db to set them in my state
    setCats([
      { id: 1, url: "https://cdn2.thecatapi.com/images/cv3.jpg" },
      { id: 2, url: "https://cdn2.thecatapi.com/images/h_lyZyS3X.jpg" },
      { id: 3, url: "https://cdn2.thecatapi.com/images/N9f1HOlPw.jpg" },
      { id: 4, url: "https://cdn2.thecatapi.com/images/g3rZEPfi9.jpg" },
      { id: 5, url: "https://cdn2.thecatapi.com/images/242.jpg" },
    ]);
  }, []);

  const addCatToCoolList = (id) => {
    if (!coolCatIds.includes(id)) {
      setCoolCatIds((ids) => [...ids, id]);
    }
  };

  const removeCatFromCoolList = (id) => {
    setCoolCatIds((ids) => ids.filter((catId) => catId != id));
  };

  return (
    <div className="App">
      <CatList addCatToCoolList={addCatToCoolList} cats={cats} />
      <CoolCatList
        removeCatFromCoolList={removeCatFromCoolList}
        cats={coolCats}
      />
    </div>
  );
}

export default App;
