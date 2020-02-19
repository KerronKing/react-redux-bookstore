import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'

import randomNumber from './logic'
import store from './store'

const initialState = {
  books: [
    {
      id: randomNumber(),
      title: 'css',
      category: 'Programming'
    },
    {
      id: randomNumber(),
      title: 'Punctuation',
      category: 'English'
    },
    {
      id: randomNumber(),
      title: 'Polynomials',
      category: 'Mathematics'
    }
  ]
}

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
)
