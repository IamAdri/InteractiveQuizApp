import { useRouter } from "next/router";
import Link from 'next/link';

export default function Question() {
const router = useRouter()
const {quizId, questionId} = router.query

return(
    <>
        {
            questionId === '1' ? QuestionsAboutArt() : QuestionsAboutScience()
        }
        { BackToPreviousPages()}
    </>
)
}

function CorrectAnswer() {
    alert('Raspuns corect!')
}

function WrongAnswer() {
    alert('Raspuns gresit! Incearca din nou.')
}

function QuestionsAboutArt() {
    
    return(
        <>
        <div>
            <h4>Cine a pictat Cina cea de Taină pe o perioadă de trei ani între 1495 și 1498?</h4>
            <ul>
                <li><button onClick={CorrectAnswer}>Leonardo da Vinci</button></li>
                <li><button onClick={WrongAnswer}>Picasso</button></li>
                <li><button onClick={WrongAnswer}>Diego Velazquez</button></li>
            </ul>
        </div>
        <div>
            <h4>În ce an se crede că da Vinci a pictat Mona Lisa?</h4>
            <ul>
                <li><button onClick={WrongAnswer}>1703</button></li>
                <li><button onClick={WrongAnswer}>1603</button></li>
                <li><button onClick={CorrectAnswer}>1503</button></li>
            </ul>
        </div>
        <div>
            <h4>Claude Monet a fost fondatorul carei școli de pictură?</h4>
            <ul>
                <li><button onClick={WrongAnswer}>Cubism</button></li>
                <li><button onClick={CorrectAnswer}>Impresionism</button></li>
                <li><button onClick={WrongAnswer}>Expresionism</button></li>
            </ul>
        </div>

        </>
    )
}

function QuestionsAboutScience() {
    
    
    return(
        <>
        <div>
            <h4>Câte inimi are o caracatiță?</h4>
            <ul>
                <li><button onClick={WrongAnswer}>1</button></li>
                <li><button onClick={WrongAnswer}>2</button></li>
                <li><button onClick={CorrectAnswer}>3</button></li>
            </ul>
        </div>
        <div>
            <h4>Cine este considerat omul care a inventat telefonul?</h4>
            <ul>
                <li><button onClick={WrongAnswer}>Michael Faraday</button></li>
                <li><button onClick={CorrectAnswer}>Alexander Graham Bell</button></li>
                <li><button onClick={WrongAnswer}>Thomas Edison</button></li>
            </ul>
        </div>
        <div>
            <h4>Câți dinți are un om adult?</h4>
            <ul>
                <li><button onClick={WrongAnswer}>30</button></li>
                <li><button onClick={CorrectAnswer}>32</button></li>
                <li><button onClick={WrongAnswer}>34</button></li>
            </ul>
        </div>

        </>
    )
}

function BackToPreviousPages() {
    return(
        <>
        <h3><Link href='/'>Pagina principala</Link></h3>
        <h3><Link href='../../../categories'>Categorii</Link></h3>
        </>
    )
}