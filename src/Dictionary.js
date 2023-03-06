import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
    let photosApiKey = "abao34e9f837fb2339t64098745a7de7";
    let photosUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;

    axios.get(photosUrl).then(handlePhotos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary mt-4 mb-3">
        <section className="text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              onChange={handleKeyword}
            />
            <a href="#">
              <button
                type="submit"
                onChange={handleKeyword}
                className="submit-button"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </a>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
