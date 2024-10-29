import { useState, useEffect } from "react";
import QuizResult from "./result";
import Link from "next/link";

export function Quiz(category) {
  const [questions, setQuestions] = useState(null);
  const [renderedId, nextId] = useState(1);
  const [number, setNumber] = useState(0);
  const [divState, setDivState] = useState(false);
  const [answeredQuestion, setAnsweredQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (questions) {
      const block = document.querySelector(".quiz");
      if (block === null) {
        setDivState(true);
      }
    }
  });

  useEffect(() => {
    const data = window.localStorage.getItem("questions");
    if (data !== null) {
      setQuestions(JSON.parse(data));
    }
    if (data === null) {
      fetch("http://localhost:3000/api/questions")
        .then((response) => response.json())
        .then((data) => setQuestions(data));
    }
  }, []);

  return (
    <div>
      {questions &&
        questions.quiz.map((q) => {
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
                  {number === 1 &&
                    answer !== "" &&
                    answer !== q.correctAnswer && (
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
                      q.id = nextId(renderedId + 1);
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
      {divState === true && (
        <>
          <QuizResult total={answeredQuestion} correct={correctAnswer} />
          <Link href="/components/form">Adauga o intrebare noua la quiz</Link>
        </>
      )}
    </div>
  );
}
