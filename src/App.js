import logo from "./logo.svg";
import googleLogo from "./images/google-logo.png";
import youtubeLogo from "./images/youtube-logo.png";
import naverLogo from "./images/naver-logo.png";
import gptLogo from "./images/gpt-logo.png";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";

function App() {
  const [wordGoogle, setWordGoogle] = useState("");
  const [wordYoutube, setWordYoutube] = useState("");
  const [wordNaver, setWordNaver] = useState("");
  const [wordGpt, setWordGpt] = useState("");

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

  const getWord = async function (wd, set) {
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

        await set(wd + " – " + wdDef);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (wordGoogle == "") {
    const rand = Math.floor(Math.random() * 375) + 1;
    getWord(words[rand], setWordGoogle);
  }
  if (wordYoutube == "") {
    const rand = Math.floor(Math.random() * 375) + 1;
    getWord(words[rand], setWordYoutube);
  }
  if (wordNaver == "") {
    const rand = Math.floor(Math.random() * 375) + 1;
    getWord(words[rand], setWordNaver);
  }
  if (wordGpt == "") {
    const rand = Math.floor(Math.random() * 375) + 1;
    getWord(words[rand], setWordGpt);
  }

  return (
    <div className="App">
      <h1>
        영단어도 익히고 검색도 해요{" "}
        <span className="text-sm">은은한 영단어와 함께</span>
      </h1>
      {/* <!-- Google 검색 --> */}

      <SearchBox
        logoImg={googleLogo}
        engine="google"
        url="https://www.google.com/search?q="
        placeholder={wordGoogle}
      />
      <SearchBox
        logoImg={youtubeLogo}
        engine="youtube"
        url="https://www.youtube.com/results?search_query="
        placeholder={wordYoutube}
      />
      <SearchBox
        logoImg={naverLogo}
        engine="naver"
        url="https://search.naver.com/search.naver?query="
        placeholder={wordNaver}
      />
      <SearchBox
        logoImg={gptLogo}
        engine="gpt"
        url="https://www.chatgpt.com/?q="
        placeholder={wordGpt}
      />
    </div>
  );
}

export default App;
