import * as React from "react";
import "./Excerpt.styl";

interface ExcerptProps {
  text: string;
  addClass?: string;
}

const Excerpt = (props: ExcerptProps) => (
  <div className={`jsm-excerpt ${props.addClass || ""}`}>
    <div className="excerpt-variable">
      <span className="exc-let">let</span>&nbsp;
      <span className="exc-variable">excerpt</span>&nbsp;
      <span className="exc-equal">=</span>&nbsp;
    </div>
    <div className="excerpt-text">"{props.text}";</div>
  </div>
);

export default Excerpt;
