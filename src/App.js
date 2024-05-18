import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [word, setWord] = useState("hello world");

  const words = [
    "ability",
    "abroad",
    "absolutely",
    "accept",
    "access",
    "accessible",
    "accident",
    "accommodate",
    "accommodation",
    "accomplish",
    "accomplishment",
    "according",
    "accordingly",
    "accounting",
    "accurate",
    "achieve",
    "acquire",
    "act",
    "actually",
    "adapt",
    "adapter",
    "additional",
    "adequate",
    "adjust",
    "adjustment",
    "administration",
    "admire",
    "admit",
    "admittance",
    "advance",
    "advanced",
    "advantage",
    "advantageous",
    "advertise",
    "advertisement",
    "advice",
    "advise",
    "affect",
    "afford",
    "affordable",
    "agency",
    "agenda",
    "agree",
    "agreeable",
    "agreement",
    "agricultural",
    "aid",
    "aim",
    "airline",
    "aisle",
    "alarm",
    "allow",
    "alternative",
    "ambitious",
    "amend",
    "amount",
    "amusing",
    "analysis",
    "analyze",
    "announcement",
    "annoying",
    "annual",
    "anticipate",
    "anxious",
    "apologize",
    "appeal",
    "appetizer",
    "appliance",
    "applicant",
    "application",
    "apply",
    "appoint",
    "appointment",
    "appreciable",
    "appreciate",
    "appreciation",
    "appreciative",
    "apprentice",
    "approach",
    "appropriate",
    "approve",
    "approximate",
    "arbitrate",
    "area",
    "argue",
    "argument",
    "arrange",
    "arrangement",
    "assemble",
    "assess",
    "assets",
    "assign",
    "assignment",
    "assist",
    "assistance",
    "assume",
    "attach",
    "attachment",
    "attend",
    "attendance",
    "attentively",
    "attract",
    "audience",
    "audit",
    "authority",
    "authorize",
    "availability",
    "available",
    "avoid",
    "awareness",
    "awkward",
    "background",
    "backpack",
    "baggage claim",
    "balance",
    "bank",
    "bankrupt",
    "barcode",
    "bargain",
    "basic",
    "behave",
    "belongings",
    "beneficial",
    "benefit",
    "beverage",
    "bid",
    "bill",
    "binder",
    "blanket",
    "block",
    "board",
    "boarding pass",
    "boardroom",
    "boast",
    "book",
    "boost",
    "bored",
    "borrow",
    "bother",
    "bottom line",
    "branch",
    "brand",
    "briefcase",
    "briefing",
    "broadcast",
    "broaden",
    "browser",
    "brush",
    "budget",
    "bulletin",
    "cabin crew",
    "cafeteria",
    "calculate",
    "calculation",
    "calculator",
    "campaign",
    "cancel",
    "cancellation",
    "candidacy",
    "candidate",
    "capacity",
    "capital",
    "career",
    "careless",
    "cash",
    "cashier",
    "cause",
    "cautious",
    "celebrate",
    "celebration",
    "cell phone",
    "certificate",
    "certification",
    "chain",
    "chain store",
    "chair",
    "chairman",
    "chairperson",
    "characteristic",
    "characterize",
    "charge",
    "charity",
    "cheap",
    "check in",
    "check out",
    "chef",
    "circumstances",
    "claim",
    "claimant",
    "classification",
    "classify",
    "clerk",
    "client",
    "climate",
    "closure",
    "coach",
    "code",
    "collect",
    "commence",
    "commission",
    "commit",
    "committee",
    "common",
    "commonly",
    "commute",
    "commuter",
    "company",
    "comparable",
    "compare",
    "compatible",
    "compensate",
    "compensation",
    "competent",
    "competition",
    "competitive",
    "competitor",
    "complain",
    "complaint",
    "complete",
    "complex",
    "complexity",
    "compliment",
    "complimentary",
    "comply",
    "comprehensive",
    "compromise",
    "compulsory",
    "concede",
    "concern",
    "conclude",
    "conclusion",
    "concourse",
    "condition",
    "conduct",
    "confirm",
    "confirmation",
    "confusion",
    "connect",
    "connection",
    "consequence",
    "consider",
    "considerable",
    "consignment",
    "consist",
    "consistent",
    "consistently",
    "constant",
    "constantly",
    "construction",
    "consult",
    "consultant",
    "consume",
    "consumer",
    "contain",
    "container",
    "continual",
    "continuation",
    "continue",
    "contribute",
    "contribution",
    "control",
    "control panel",
    "convenient",
    "conveniently",
    "convince",
    "convincing",
    "corporate",
    "corporation",
    "cost",
    "counter",
    "courier",
    "cover letter",
    "coverage",
    "coworker",
    "crash",
    "credentials",
    "credit",
    "criteria",
    "critical",
    "criticize",
    "crowd",
    "crowded",
    "crucial",
    "cruise",
    "currency",
    "current",
    "custom",
    "customer",
    "customs",
    "cutting edge",
    "cycle",
    "daily",
    "damage",
    "deadline",
    "deal",
    "debit",
    "debt",
    "decision",
    "decorate",
    "decrease",
    "dedicate",
    "deduct",
    "defect",
    "defective",
    "definite",
    "definitely",
    "degree",
    "delay",
    "delete",
    "delight",
    "delighted",
    "deliver",
    "delivery",
    "demand",
    "demanding",
    "demonstrate",
    "depart",
    "department",
    "departure",
    "depend on",
    "dependence",
    "deposit",
    "description",
    "designate",
    "desperate",
    "dessert",
    "destination",
    "detail",
    "detailed",
    "detect",
    "deterioration",
    "determine",
    "determined",
    "develop",
    "developer",
    "development",
    "device",
    "diagnose",
    "differential",
    "director",
    "disagree",
    "disagreement",
    "disappointing",
    "disconnect",
    "discount",
    "discrepancy",
    "discrimination",
    "discuss",
    "discussion",
    "dish",
    "dismiss",
    "dismissive",
    "display",
    "disposable",
    "dispose",
    "dispute",
    "disruption",
    "distinctive",
    "distinguish",
    "distribute",
    "distribution",
    "dividend",
    "document",
    "donate",
    "donation",
    "double",
    "download",
    "downsize",
    "downturn",
    "downward",
    "dramatic",
    "drastic",
    "drastically",
    "draw",
    "drawer",
  ];
  // 0 ~ 374
  console.log(Math.floor(Math.random() * 375) + 1);

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

  const getWord = async function (wd) {
    // const wd = "devoid";
    const apiUrl =
      "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/" +
      wd +
      "?key=6a7eac20-1b82-4888-8bcf-96c69d8aa52f";

    axios
      .get(apiUrl)
      .then(async function (response) {
        const wdDef = response.data[0].shortdef[0];
        console.log(wd + " " + response.data[0].shortdef[0]);

        await setWord(wd + " – " + wdDef);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (word == "hello world") {
    const rand = Math.floor(Math.random() * 375) + 1;
    setWord(getWord(words[rand]));
  }

  return (
    <div className="App">
      <h1>
        영단어도 익히고 검색도 해요{" "}
        <span className="text-sm">은은한 영단어와 함께</span>
      </h1>
      {/* <!-- 폼을 정의하고 onsubmit 이벤트를 사용하여 searchAndRedirect 함수를 호출합니다. --> */}
      <form onSubmit={searchAndRedirect}>
        {/* <!-- 검색 쿼리를 입력받는 텍스트 입력 필드입니다. placeholder 속성을 추가했습니다. --> */}
        <label htmlFor="searchQuery">Search Query:</label>
        <input
          type="text"
          id="searchQuery"
          name="searchQuery"
          placeholder={word}
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
