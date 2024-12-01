import { useEffect, useState } from "react";
import { questions as basicQues } from "./quizConstants";

const QuizApp = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [questions, setQuestions] = useState(basicQues);

    const nextCLick = () => {
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion(currentQuestion+1)
        } else {
            setShowResult(true)
        }
    }

    const backCLick = () => {
        if (currentQuestion !== 0) {
            setCurrentQuestion(currentQuestion-1)
        }
    }

    const answerClick = (selectedOption) => {
        const quesCopy = questions.map((ques, index) => {
            if (index === currentQuestion) {
                return {...ques,
                    selectedOption: selectedOption
                }
            }
            return ques
        })
        setQuestions(quesCopy);
    }

    useEffect(() => {
        const initQues = questions.map(ques => {
            return {...ques,
                selectedOption: {}
            }
        })
        setQuestions(initQues);
    }, [])

    // useEffect(() => {
    //     if (Object.keys(selectedOption).length > 0) {
            
    //     }
    // }, [selectedOption])

    return (
        <div>
            {questions && !showResult && <div className="quizContiner">
                <div>Quiz</div>
                <hr></hr>
                <div>{currentQuestion+1 + "." + questions[currentQuestion].question}</div>
                <ul>
                    {
                        questions[currentQuestion].options.map(opt => {
                            return <li key={opt.answer} onClick={() => answerClick(opt)}>
                                {opt.answer}
                            </li>
                        })
                    }
                </ul>
                <div>
                    {
                        questions[currentQuestion]?.selectedOption && questions[currentQuestion]?.selectedOption?.answer && 
                        <div>
                            {questions[currentQuestion]?.selectedOption?.isCorrect ? "Correct answer" : "Wrong answer"}
                        </div>
                    }
                </div>
                <div>
                    <input className="btns" type="button" onClick={() => backCLick()} value="Back" />
                    <input className="btns" type="button" onClick={() => nextCLick()} value="Next" />
                </div>
            </div>}
            {showResult && 
            <div>
                You scored {questions.reduce((acc, curr) => {
                    if (curr.selectedOption?.isCorrect) {
                        acc++;
                    }
                    return acc;
                }, 0)} out of {questions.length}
            </div>
            }
        </div>
    )
}

export default QuizApp;