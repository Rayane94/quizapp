import React, { useContext } from 'react'
import { Accordion } from 'react-bootstrap'
import { QuizContext } from '../context/QuizContext'
import QuestionItem from './QuestionItem'

function QuizAccordion({ category }) {
  const { state } = useContext(QuizContext)
  const filteredQuestions =
    category === 'all'
      ? state.questions
      : state.questions.filter((q) => q.category === category)

  return (
    <Accordion>
      {filteredQuestions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </Accordion>
  )
}

export default QuizAccordion
