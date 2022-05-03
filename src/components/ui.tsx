import React from "react";
export interface Props {
  text: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  array: {
    results: {
      title: string;
    }[];
  };
}
function Ui({ text, handleChange, handleSubmit, array }: Props) {
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
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <button className="icon" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className="results">
        {array &&
          array.results.map((el: any) => {
            return (
              el.poster_path && (
                <div className="film">
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
    </main>
  );
}

export default Ui;
