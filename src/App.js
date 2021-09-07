/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./styles/app.css";
import QuoteBox from "./components/QuoteBox";
import Spinner from "react-bootstrap/Spinner";

const quoteURL =
  "https://gist.githubusercontent.com/Gisellea198/7b04f1533c69d0aee3acecf4eab9a25e/raw/7b598e8dc3a1453b32fd47ebd29f9af83c0bd955/quotes.json";

const colorsArr = [
  "435BF0",
  "884BE3",
  "F034AF",
  "F5553F",
  "F09F43",
  "FA465E",
  "46BBFA",
  "29F560",
  "184157",
  "81F499",
  "F0B718",
];

const randomArrVal = (arr) => {
  console.log(arr);
  let randomNum = Math.floor(Math.random() * arr.length);
  console.log(arr[randomNum]);
  return arr[randomNum];
};

const useFetch = (url) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, [url]);
  return data;
};

const App = () => {
  const [accentColor, setAccentColor] = useState("#4FC1FF");
  const quotes = useFetch(quoteURL);
  const [currentQuote, setCurrentQuote] = useState({ author: "", quote: "" });

  const handleNewQuote = () => {
    setAccentColor(`#${randomArrVal(colorsArr)}`);
    let quoteArr = quotes.quotes;
    setCurrentQuote(randomArrVal(quoteArr));
  };

  useEffect(() => {
    if (quotes) {
      handleNewQuote();
    }
  }, [quotes]);

  return (
    <div
      className="App"
      style={{ backgroundColor: `${accentColor}`, color: `${accentColor}` }}
    >
      {currentQuote.quote === "" ? (
        <Spinner
          className="loading-spinner"
          animation="grow"
          variant="light"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <QuoteBox
          accentColor={accentColor}
          currentQuote={currentQuote}
          handleNewQuote={handleNewQuote}
        />
      )}
    </div>
  );
};

export default App;
