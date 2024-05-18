import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const searchAndRedirect = function (evt) {
    evt.preventDefault();
    // 입력된 검색 쿼리를 가져옵니다.
    var query = document.getElementById("searchQuery").value;
    // 검색 쿼리가 입력되었는지 확인합니다.
    if (query) {
      // 선택된 검색 엔진의 값을 가져옵니다.
      var searchEngine = document.getElementById("searchEngine").value;
      var searchUrl;

      // 선택된 검색 엔진에 따라 검색 URL을 생성합니다.
      if (searchEngine === "google") {
        searchUrl =
          "https://www.google.com/search?q=" + encodeURIComponent(query);
      } else if (searchEngine === "bing") {
        searchUrl =
          "https://www.bing.com/search?q=" + encodeURIComponent(query);
      } else if (searchEngine === "naver") {
        searchUrl =
          "https://search.naver.com/search.naver?query=" +
          encodeURIComponent(query);
      }

      // 브라우저를 해당 URL로 리디렉션합니다.
      window.location.href = searchUrl;
    } else {
      // 검색 쿼리가 입력되지 않은 경우 경고 메시지를 표시합니다.
      alert("Please enter a search query.");
    }
  };

  const Word = "devoid / ~가 없는";

  const word = axios
    .get(
      "https://glosbe.com/gapi/translate?from=eng&dest=kor&format=json&pretty=true&phrase=phrase"
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(word);

  return (
    <div className="App">
      <h1>
        골라서 검색해요 <span className="text-sm">은은한 영단어와 함께</span>
      </h1>
      {/* <!-- 폼을 정의하고 onsubmit 이벤트를 사용하여 searchAndRedirect 함수를 호출합니다. --> */}
      <form onSubmit={searchAndRedirect}>
        {/* <!-- 검색 쿼리를 입력받는 텍스트 입력 필드입니다. placeholder 속성을 추가했습니다. --> */}
        <label htmlFor="searchQuery">Search Query:</label>
        <input
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder={Word}
          required
        />

        {/* <!-- 검색 엔진을 선택할 수 있는 드롭다운 메뉴입니다. --> */}
        <label htmlFor="searchEngine">Search Engine:</label>
        <select id="searchEngine" name="searchEngine">
          <option value="google">Google</option>
          <option value="bing">Bing</option>
          <option value="naver">Naver</option>
        </select>

        {/* <!-- 폼 제출 버튼입니다. --> */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
