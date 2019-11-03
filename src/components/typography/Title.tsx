import * as React from "react";
import terms from "../../utils/terms";
import "./Title.styl";

function randomHighlightColor() {
  return ["red", "cyan", "yellow", "magenta", "green"][
    Math.floor(Math.random() * 5)
  ];
}

function shouldHighlight(word: string): boolean {
  return terms.filter(term => term.test(word)).length > 0;
}

function makeHighlight(text: string) {
  return text.split(" ").map(word => (
    <span
      key={word}
      className={
        shouldHighlight(word) ? `highlight ${randomHighlightColor()}` : ""
      }
    >
      {word}&nbsp;
    </span>
  ));
}

interface TitleProps {
  text: string;
  highlight?: boolean;
  theme?: "dark" | "light";
}

const Title: React.SFC<TitleProps> = props => (
  <h1 className={`jsm-title ${props.theme}`}>
    {props.highlight ? makeHighlight(props.text) : props.text}
  </h1>
);

Title.defaultProps = {
  highlight: false,
  theme: "light"
};

export default Title;
