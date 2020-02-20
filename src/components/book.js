import React from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'

const Book = props => {
  const { id, title, category } = props.bookObject
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  )
}

export default Book
