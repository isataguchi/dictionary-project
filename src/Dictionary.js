import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
