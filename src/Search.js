import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [word, setWord] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handleNewWord(event) {
    setWord(event.target.value);
  }
  function searching(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="container">
      <div className="Search">
        <form onSubmit={searching}>
          <input type="search" onChange={handleNewWord} />
        </form>
        <Results results={definition} />
      </div>
    </div>
  );
}
