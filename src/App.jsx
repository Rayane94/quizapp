import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FilterQuiz from './FilterQuiz';
import QuizAccordion from './QuizAccordion';
import { QuizProvider } from './QuizContext';

function App() {
  const [category, setCategory] = useState('Math');

  return (
    <QuizProvider>
      <Container className="my-4">
        <h1>Quiz Interactif</h1>
        <FilterQuiz setCategory={setCategory} />
        <QuizAccordion category={category} />
      </Container>
    </QuizProvider>
  );
}

export default App;