import React from 'react'
import './App.css'
import SearchPage from './SearchPage.js'
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

  update = (updatedBook,shelf) => {
    //console.log(updatedBook)
    //console.log(shelf)
    BooksAPI.update(updatedBook,shelf)
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
        {/* <Route exact path='/' component = {BookLibrary}></Route> */}
        <Route exact path='/' component = {() => (<BookLibrary books = {this.state.books}  update = {this.update}/> )}></Route>
        {/* <Route exact path='/search' component={SearchPage}></Route> */}
        <Route exact path='/search' component = {() => (<SearchPage books = {this.state.books}  update = {this.update}/> )} ></Route>
      </div>
    )
  }
}

export default BooksApp
