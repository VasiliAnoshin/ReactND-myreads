import React from 'react'
import './App.css'
import SearchPage from './SearchPage.js'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import BookLibrary from './BookLibrary.js'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) =>{
      this.setState(() => ({
        books
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component = {BookLibrary}></Route>
        <Route exact path='/search' component={SearchPage}></Route>
      </div>
    )
  }
}

export default BooksApp
