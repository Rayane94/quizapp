import React, { createContext, useReducer } from 'react'
import quizData from './quizData'

const QuizContext = createContext()

const initialState = {
  questions: quizData,
}

function quizReducer(state, action) {
  switch (action.type) {
    case 'VALIDATE_QUESTION':
      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id === action.payload.id && q.validated === undefined) {
            return { ...q, validated: action.payload.answer }
          }
          return q
        }),
      }
    default:
      return state
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}

export { QuizContext, QuizProvider }
