import { useState, useEffect } from "react";
import QuizResult from "./result";

export function Quiz(category, { questions }) {
  const [renderedId, nextId] = useState("1");
  const [number, setNumber] = useState(0);
  const [divState, setDivState] = useState(false);
  const [answeredQuestion, setAnsweredQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  useEffect(() => {
    const block = document.querySelector(".quiz");
    console.log(block);
    if (block === null) {
      setDivState(true);
      console.log(divState);
    }
  });
  return (
    <>
      {questions.map((q) => {
        const [answer, setAnswer] = useState("");
        if (q.category === category && q.id === renderedId) {
          return (
            <div className="quiz" key={q.id}>
              <span>
                Question {q.id}: {q.question}
              </span>
              <div>
                {q.answers.map((ans) => {
                  return (
                    <div key={ans}>
                      <button
                        onClick={(e) => {
                          setAnswer(ans);
                          setNumber(number + 1);
                          e.target.parentElement.parentElement.style.pointerEvents =
                            "none";
                        }}
                      >
                        {ans}
                      </button>
                    </div>
                  );
                })}
                {answer === q.correctAnswer && (
                  <div>
                    <br></br>Raspuns corect!
                  </div>
                )}
                {answer !== "" && answer !== q.correctAnswer && (
                  <div>
                    <br></br>Raspuns gresit!
                  </div>
                )}
              </div>
              <br></br>
              {number > 0 ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    q.id = nextId(String(Number(renderedId) + 1));
                    setNumber(0);
                    setAnsweredQuestion(answeredQuestion + 1);
                    if (answer === q.correctAnswer) {
                      setCorrectAnswer(correctAnswer + 1);
                    }
                  }}
                >
                  Urmatoarea intrebare
                </button>
              ) : (
                ""
              )}
            </div>
          );
        }
      })}
      {divState === true && QuizResult(answeredQuestion, correctAnswer)}
    </>
  );
}
