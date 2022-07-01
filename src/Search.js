import React, { useState } from "react";
import "./search.css";
import axios from "axios";

export default function Search() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleNewWord(event) {
    setWord(event.target.value);
  }
  function searching(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Search">
      <form onSubmit={searching}>
        <input type="search" onChange={handleNewWord} />
      </form>
    </div>
  );
}
