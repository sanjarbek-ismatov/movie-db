import React, { useEffect, useState } from "react";
export interface Props {
  text: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  array: {
    results: {
      title?: string;
    }[];
  };
}
function Ui({ text, handleChange, handleSubmit, array }: Props) {
  const [state, setState] = useState<string>("spinner");
  const [result, setResult] = useState<string>("none");
  useEffect(() => {
    animator();
  }, []);
  const animator = () => {
    handleSubmit();
    setTimeout(() => {
      setState("");
      setResult("results");
    }, 2000);
  };
  return (
    <main>
      <h1 className="logo">The Movie DB</h1>
      <div className="input">
        <input
          className="search"
          type="text"
          onChange={handleChange}
          value={text}
          onKeyPress={(e) => {
            if (text) {
              if (e.key === "Enter") {
                setState("spinner");
                setResult("none");
                animator();
              }
            }
          }}
        />
        <button
          className="icon"
          onClick={() => {
            // text ? handleSubmit() : "";
            if (text) {
              setState("spinner");
              setResult("none");
              animator();
            }
          }}
        >
          Search
        </button>
      </div>
      <div className={result}>
        {array &&
          array.results.map((el: any, id: number) => {
            return (
              el.poster_path && (
                <div className="film" key={id}>
                  <img
                    className="film-image"
                    src={`http://image.tmdb.org/t/p/w1280/${el.poster_path}`}
                  />
                  <div className="titles">
                    <p className="title">{el.title}</p>
                  </div>
                </div>
              )
            );
          })}
      </div>
      <div className={state}>
        <span className="spin"></span>
      </div>
    </main>
  );
}

export default Ui;
