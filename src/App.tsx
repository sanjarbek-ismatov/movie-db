import Ui from "./components/ui";
import "./styles/main.scss";
import React, { useState, useEffect } from "react";
import { Props } from "./components/ui";
function App() {
  const [array, setArray] = useState<Props | any>();
  const [text, setText] = useState<string>("Terminator");
  useEffect(() => {
    fetcher();
  }, []);
  const fetcher = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f5eb67dea1a91e8974405abc90a7ae23&language=en-US&query=${text}&page=1&include_adult=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setArray(data);
      })
      .catch((e) => alert(e));
  };
  return (
    <Ui
      text={text}
      handleChange={(e) => {
        setText(e.target.value);
      }}
      handleSubmit={fetcher}
      array={array}
    />
  );
}

export default App;
