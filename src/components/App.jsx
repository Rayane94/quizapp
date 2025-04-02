import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import FilterQuiz from './FilterQuiz'
import QuizAccordion from './QuizAccordion'

function App() {
  const [category, setCategory] = useState('all')

  return (
    <Container className="my-4">
      <h1>Quiz Interactif</h1>
      <FilterQuiz setCategory={setCategory} />
      <QuizAccordion category={category} />
    </Container>
  )
}

export default App
