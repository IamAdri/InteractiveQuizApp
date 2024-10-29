export default function QuizResult ({total, correct}) {
    return(
            <div>
              <h1>Rezultat</h1>
              <p>Numarul total de intrebari: {total}</p>
              <p>Intrebari raspunse corect: {correct}/{total}</p>
              <p>{correct > (total /2) ? (<span>Felicitari! Ai raspuns la jumatate din intrebari sau mai mult corect!</span>) : (<span>Imi pare rau, nu ai trecut quiz-ul!</span>)}</p>
            </div>
    )
}