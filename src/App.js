import logo from "./logo.svg";
import "./App.css";

function App() {
  const Word = "devoid / ~가 없는";
  return (
    <div className="App">
      <div>
        <form>
          Searh on Google!
          <input placeholder={Word}></input>
          <button>Search</button>
        </form>
        <form>
          Searh on Google!
          <input placeholder={Word}></input>
          <button>Search</button>
        </form>
        <form>
          Searh on Google!
          <input placeholder={Word}></input>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
