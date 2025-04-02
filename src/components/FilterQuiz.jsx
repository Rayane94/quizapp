import React from 'react'
import { Form } from 'react-bootstrap'

function FilterQuiz({ setCategory }) {
  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <Form.Group controlId="categorySelect" className="mb-3">
      <Form.Label>Choisissez une catégorie :</Form.Label>
      <Form.Control as="select" onChange={handleChange}>
        <option value="all">Toutes</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="Histoire">Histoire</option>
      </Form.Control>
    </Form.Group>
  )
}

export default FilterQuiz
