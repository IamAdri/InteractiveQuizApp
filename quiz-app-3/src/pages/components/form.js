import { useEffect, useState } from "react";
import Link from "next/link";

export default function openForm() {
  const [newQuestion, setNewQuestion] = useState("");
  const [category, setCategory] = useState("art");
  const [correctOption, setCorrectOption] = useState("");
  const [firstWrongtOption, setFirstWrongOption] = useState("");
  const [secondWrongtOption, setSecondWrongOption] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const [storagedQuestions, setStoragedQuestions] = useState(null);
  useEffect(() => {
    const data = window.localStorage.getItem("questions");
    if (data !== null) {
      setStoragedQuestions(JSON.parse(data));
    }
    if (data === null) {
      fetch("http://localhost:3000/api/questions")
        .then((response) => response.json())
        .then((data) => setStoragedQuestions(data));
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDiv = document.querySelector(".formSection");
    formDiv.style.display = "none";
    setSuccessMessage("Intrebarea a fost adaugata cu succes!");
    if (storagedQuestions !== null) {
      const questionsByCategory = storagedQuestions.quiz.filter((q) => {
        return q.category === category;
      });
      const lastElement = questionsByCategory[questionsByCategory.length - 1];
      questionsByCategory.push({
        category: category,
        id: lastElement.id + 1,
        question: newQuestion,
        answers: [correctOption, firstWrongtOption, secondWrongtOption],
        correctAnswer: correctOption,
      });
      const questionsFromOtherCategory = storagedQuestions.quiz.filter((q) => {
        return q.category !== category;
      });
      const updatedQuestions = questionsByCategory.concat(
        questionsFromOtherCategory
      );
      storagedQuestions.quiz = [...updatedQuestions];
      localStorage.setItem("questions", JSON.stringify(storagedQuestions));
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="formSection">
        <div>
          <label>Categorie</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value={"art"}>Arta</option>
            <option value={"science"}>Stiinta</option>
          </select>
        </div>
        <br></br>
        <div>
          <label>Adauga intrebarea</label>
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => {
              setNewQuestion(e.target.value);
            }}
            required
          ></input>
        </div>
        <br></br>
        <div>
          <label>Varianta de raspuns corecta</label>
          <input
            type="text"
            value={correctOption}
            onChange={(e) => {
              setCorrectOption(e.target.value);
            }}
            required
          ></input>
        </div>
        <br></br>
        <div>
          <label>Prima varianta de raspuns gresita</label>
          <input
            type="text"
            value={firstWrongtOption}
            onChange={(e) => {
              setFirstWrongOption(e.target.value);
            }}
            required
          ></input>
        </div>
        <br></br>
        <div>
          <label>A doua varianta de raspuns gresita</label>
          <input
            type="text"
            value={secondWrongtOption}
            onChange={(e) => {
              setSecondWrongOption(e.target.value);
            }}
            required
          ></input>
        </div>
        <br></br>
        <br></br>
        <button type="submit">Salveaza</button>
      </div>
      {succesMessage !== "" && (
        <div>
          <h1>{succesMessage}</h1>
          <Link href="../categories">Categorii</Link>
          <br></br>
          <Link href="..">Pagina principala</Link>
        </div>
      )}
    </form>
  );
}
