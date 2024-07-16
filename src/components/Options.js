import React from "react";
import NextButton from "./NextButton";

function Options({ question, answer, dispatch }) {
  return (
    <>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            disabled={answer !== null}
            onClick={() => {
              dispatch({ type: "newAnswer", payload: index });
            }}
            className={`btn btn-option ${answer === index ? "answer" : ""}  ${
              answer
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>

    </>
  );
}

export default Options;
