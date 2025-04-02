import React, { createContext, useReducer } from 'react'
import quizData from './quizData'
import { quizReducer } from '../reducers/quizReducer'

const QuizContext = createContext()

const initialState = {
  questions: quizData,
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
