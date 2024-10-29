import { useRouter } from "next/router";
import Link from "next/link";
import { Quiz } from "../../../components/renderQuestions";

export default function QuestionsByQuiz() {
  const router = useRouter();
  const quizId = router.query.quizId;
  return (
    <>
      {quizId === "1" ? Quiz("art") : Quiz("science")}
      {BackToPreviousPages()}
    </>
  );
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
