import { useState } from "react";

export default function SearchBox(props) {
  const searchAndRedirect = function (e) {
    e.preventDefault();
    let query = document.getElementById(props.engine).value;
    if (query) {
      window.open(props.url + encodeURIComponent(query), "_blank");
    } else {
      // Just search the placeholded word
      const wd = props.placeholder.split(" – ")[0];
      window.open(props.url + encodeURIComponent(wd), "_blank");
    }
  };

  return (
    <div className="form-wrapper">
      <form className="search-form" onSubmit={searchAndRedirect}>
        <img className="logo" src={props.logoImg}></img>
        <textarea
          className="search-box"
          type="text"
          id={props.engine}
          name={props.engine}
          placeholder={props.placeholder}
        ></textarea>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
