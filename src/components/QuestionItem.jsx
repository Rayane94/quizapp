import React, { useContext } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { QuizContext } from '../context/QuizContext'

function QuestionItem({ question }) {
  const { dispatch } = useContext(QuizContext)

  const handleValidation = (answer) => {
    if (!question.answered) {
      dispatch({ type: 'VALIDATE_QUESTION', payload: { id: question.id, answer } })
    }
  }

  return (
    <Accordion.Item eventKey={String(question.id)}>
      <Accordion.Header>
        <div className="d-flex justify-content-between w-100">
          <span>{question.question}</span>
          {question.answered && (
            <span>{question.validated ? 'Juste' : 'Faux'}</span>
          )}
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <p>
          <strong>Réponse :</strong> {question.answer}
        </p>
        <div className="d-flex justify-content-around">
          <Button
            variant="success"
            onClick={() => handleValidation(true)}
            disabled={question.answered}
          >
            Juste
          </Button>
          <Button
            variant="danger"
            onClick={() => handleValidation(false)}
            disabled={question.answered}
          >
            Faux
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default QuestionItem
