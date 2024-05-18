import { useState } from "react";

export default function SearchBox(props) {
  const searchAndRedirect = function (e) {
    e.preventDefault();
    let query = document.getElementById(props.engine).value;
    console.log(this);
    if (query) {
      window.open(props.url + encodeURIComponent(query), "_blank");
    } else {
      alert("Please enter a search query.");
    }
  };

  return (
    <form className="search-form" onSubmit={searchAndRedirect}>
      <img className="logo" src={props.logoImg}></img>
      <input
        className="search-box"
        type="text"
        id={props.engine}
        name={props.engine}
        placeholder={props.placeholder}
        required
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}
