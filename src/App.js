import React from 'react'
import Bookslist from './containers/bookslist'
import Booksform from './containers/booksform'

import './app.css'

const App = () => (
  <div className='App'>
    <div className='container-fluid px-5 bg-white'>
      <div className='row'>
        <div className='col-12 d-flex justify-content-between'>
          <div id='nav-left' className='d-flex'>
            <h1 className='p-4 text-primary' id='book-store-h1'>Bookstore CMS</h1>
            <h6 className='p-4' id='books-h5'>BOOKS</h6>
            <h6 className='p-4' id='categories-h5'>CATEGORIES</h6>
          </div>
          <div id='nav-right'>
            <p className='mt-4'><i className='user-icon fas fa-user' /></p>
          </div>
        </div>
      </div>
    </div>
    <Bookslist />
    <Booksform />
  </div>
)

export default App
