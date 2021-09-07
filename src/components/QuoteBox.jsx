import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from "react-bootstrap/Button";

import "../styles/quoteBox.css";

const QuoteBox = ({ accentColor, handleNewQuote, currentQuote }) => {
  const { quote, author } = currentQuote;
  return (
    <div
      id="quote-box"
      className="quote-box"
      style={{ backgroundColor: "bisque" }}
    >
      <div className="quote-text">
        <span id="text" className="quote">
          "{quote}"
        </span>
      </div>
      <div className="quote-author">
        <span id="author">{author}</span>
      </div>
      <div className="buttons">
      <Button
          id="tweet-quote"
          className="icon quote-btn transition"
          style={{ color: `${accentColor}` }}
          href={`https://twitter.com/intent/tweet?text=${quote}-${author}&hashtags=quote`}
        >
          <SvgIcon component={TwitterIcon} style={{ fontSize: 60 }} />
        </Button>
        <Button
          id="new-quote"
          className="quote-btn transition"
          onClick={() => handleNewQuote()}
          style={{ backgroundColor: `${accentColor}` }}
        >
          Nueva Cita
        </Button>
      </div>
    </div>
  );
};

export default QuoteBox;
