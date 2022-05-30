import React from "react";

function Snippet(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <img
        className="{props.title}"
        src={require(`/src/images/${props.ISBN}.png`)}
        alt={props.title}
      />

      <p>ISBN: {props.ISBN}</p>
      <p>Date read: {props.ReadingDate}</p>
      <p>How strongly I recommend it: {props.points}/10</p>
      <h2>
        Go to{" "}
        <a href={props.amazon} target="_blank" rel="noopener noreferrer">
          Amazon Page
        </a>{" "}
        for details and reviews.
      </h2>
      <p>{props.review}</p>
      <hr></hr>
    </>
  );
}

export default Snippet;
