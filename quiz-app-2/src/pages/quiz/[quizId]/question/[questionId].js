import { useRouter } from "next/router";
import Link from "next/link";
import { Quiz } from "../../../components/renderQuestions";

export default function QuestionsByQuiz({ questions }) {
  const router = useRouter();
  const quizId = router.query.quizId;
  return (
    <>
      {quizId === "1"
        ? Quiz("art", { questions })
        : Quiz("science", { questions })}
      {BackToPreviousPages()}
    </>
  );
}


export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/quiz`);
  const data = await response.json();

  return {
    props: {
      questions: data,
    },
  };
}

function BackToPreviousPages() {
  return (
    <>
      <br></br>
      <br></br>
      <h3>
        <Link href="/">Pagina principala</Link>
      </h3>
      <h3>
        <Link href="../../../categories">Categorii</Link>
      </h3>
    </>
  );
}
