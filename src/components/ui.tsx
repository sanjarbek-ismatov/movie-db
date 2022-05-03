import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div className="results">
        {array &&
          array.results.map((el: any) => {
            return (
              el.poster_path && (
                <div className="film">
                  <p className="title">{el.title}</p>
                  <img
                    className="film-image"
                    src={`http://image.tmdb.org/t/p/w1280/${el.poster_path}`}
                  />
                </div>
              )
            );
          })}
      </div>
    </main>
  );
}

export default Ui;
