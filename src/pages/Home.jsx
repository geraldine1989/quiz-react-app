import { QUESTIONS } from "../data/questions"
import { useState } from "react"

function Home() {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [compltedQuiz, setCompletedQuiz] = useState(false);
const [score, setScore] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const currentQuestion = QUESTIONS[currentQuestionIndex];

const handleAnswerSelection = (selectedOptionIndex) => {
  if (selectedOptionIndex === currentQuestion.answer) {
    setScore(score + 1);
  }
  setSelectedAnswer(selectedOptionIndex);

  setTimeout(() => {
    if (currentQuestionIndex === QUESTIONS.length - 1) {
      setCompletedQuiz(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    setSelectedAnswer(null)
  }, 1000);

}

  return (
    <main className="flex flex-col">
      {!compltedQuiz ? (
        <div>
          <h1 className="text-white text-center">Question {currentQuestion.id}</h1>
          <div className="bg-white border-secondary border-4 rounded-lg p-4 w-full lg:w-1/2 mx-auto">
            <div className="text-primary font-bold">{currentQuestion.question}</div>
            <div className="flex flex-col gap-2 mt-6">
              {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`btn ${selectedAnswer === index ? (selectedAnswer === currentQuestion.answer ? "bg-valid" : "bg-invalid") : "btn-secondary"}`}
                    onClick={() => handleAnswerSelection(index)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold">Quizz complété !</h1>
          <p>Votre score est de {score} sur {QUESTIONS.length}</p>
          <button 
            type="button" 
            onClick={() => {
            setCurrentQuestionIndex(0);
            setCompletedQuiz(false);
            setScore(0);
            }}
            className="btn btn-secondary mt-4"
          >Rejouer</button>
          <hr className="border border-white my-10"/>
          <div>
            <p className="text-left font-bold mt-4 mb-2 w-full lg:w-1/2 mx-auto">Voici les réponses correctes :</p>
            <div className="flex flex-col gap-2">
              {QUESTIONS.map((question, index) => (
                <div key={index} className="bg-white border-secondary border-4 rounded-lg p-4 w-full lg:w-1/2 mx-auto text-primary">
                  <div className="text-center font-bold">{question.question}</div>
                  <ul className="flex flex-col gap-2">
                    {question.options.map((option, optionIndex) => (
                    <li key={optionIndex} className={`${optionIndex === question.answer ? "text-tertiary" : "line-through"}`}>
                      {option}
                    </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4">Merci pour votre participation !</p>
        </div> 
      )}
    </main>
  )
}
export default Home