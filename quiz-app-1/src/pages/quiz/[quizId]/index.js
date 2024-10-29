import { useRouter } from "next/router"
import Link from 'next/link';


export default function QuizQuestions() {
    const router = useRouter()
    const quizId = router.query.quizId
    
    
return(
    <>
        {
            quizId === '1' ? quiz1() : quiz2()
        }
    </>
)
}

function quiz1() {
    return(
        <>
        <h1>Ati accesat quiz-ul din categoria 'Arta'</h1>
        <br></br>
        <p>Quiz-ul contine 3 intrebari despre arta. Fiecare intrebare va afisa 3 variante de raspuns, dintre care doar 1 este corecta. Succes!</p>
        <br></br><br></br>
        <h3><Link href='1/question/1'>Incepe quiz-ul</Link></h3>
        <br></br><br></br>
        <h4><Link href='../../categories'>Categorii</Link></h4>
        <br></br>
        <h4><Link href='/'>Pagina principala</Link></h4>
        </>
    )
}

function quiz2() {
    return(
        <>
        <h1>Ati accesat quiz-ul din categoria 'Stiinta'</h1>
        <br></br>
        <p>Quiz-ul contine 3 intrebari despre stiinta. Fiecare intrebare va afisa 3 variante de raspuns, dintre care doar 1 este corecta. Succes!</p>
        <br></br><br></br>
        <h3><Link href='2/question/2'>Incepe quiz-ul</Link></h3>
        <br></br><br></br>
        <h4><Link href='../../categories'>Categorii</Link></h4>
        <br></br>
        <h4><Link href='/'>Pagina principala</Link></h4>
        </>
    )
}