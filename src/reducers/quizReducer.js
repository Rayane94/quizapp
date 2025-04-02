export function quizReducer(state, action) {
    switch (action.type) {
      case 'VALIDATE_QUESTION':
        return {
          ...state,
          questions: state.questions.map((q) => {
            if (q.id === action.payload.id && !q.answered) {
              return { ...q, answered: true, validated: action.payload.answer }
            }
            return q
          }),
        }
      default:
        return state
    }
  }
  