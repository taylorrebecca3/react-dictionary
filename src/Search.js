import React, { useState } from "react";
import "./search.css";

export default function Search() {
  let [word, setWord] = useState("");

  function handleNewWord(event) {
    setWord(event.target.value);
  }
  function searching(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }
  return (
    <div className="Search">
      <form onSubmit={searching}>
        <input type="search" onChange={handleNewWord} />
      </form>
    </div>
  );
}
