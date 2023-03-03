import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    // https://www.shecodes.io/learn/apis/dictionary //
    const key = `abao34e9f837fb2339t64098745a7de7`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary mt-3 mb-3">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
