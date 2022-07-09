import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search() {
  let [word, setWord] = useState("");
  let [definition, setDefinition] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setDefinition(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleNewWord(event) {
    setWord(event.target.value);
  }
  function searching(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001f2a3b2598b83475da792644d5b83a41e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let header = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: header,
      })
      .then(handlePexelsResponse);
  }
  return (
    <div className="container">
      <div className="Search">
        <section>
          <form onSubmit={searching}>
            <input
              type="search"
              onChange={handleNewWord}
              placeholder="What word are you looking for?"
            />
          </form>
        </section>
        <Results results={definition} />
        <Photos photos={photos} />
      </div>
    </div>
  );
}
