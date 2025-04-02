import React, { useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import { QuizContext } from './QuizContext';
import QuestionItem from './QuestionItem';

function QuizAccordion({ category }) {
  const { state } = useContext(QuizContext);
  const filteredQuestions = state.questions.filter(q => q.category === category);

  return (
    <Accordion>
      {filteredQuestions.map(question => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </Accordion>
  );
}

export default QuizAccordion;
