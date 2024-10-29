import Link from "next/link";

export default function Categorii() {
  return (
    <>
      <h1>Categorii</h1>
      <div>
        <br></br>
        <br></br>
        <h2>
          <Link href="/quiz/1">Arta</Link>
        </h2>
      </div>
      <div>
        <br></br>
        <br></br>
        <h2>
          <Link href="/quiz/2">Stiinta</Link>
        </h2>
        <br></br>
        <br></br>
      </div>
      <div>
        <br></br>
        <br></br>
        <h2>
          <Link href="./components/form">Adauga intrebari noi pentru quiz</Link>
        </h2>
        <br></br>
        <br></br>
      </div>

      <h3>
        <Link href="/">Pagina principala</Link>
      </h3>
    </>
  );
}
