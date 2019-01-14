import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Shelf from './Shelf'

class BookLibrary extends Component
{
    render(){
        console.log('Props',this.props)
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                   <Shelf filteredBooks = {this.props.books.filter(booktype => booktype.shelf === 'currentlyReading')} updateFunc = {this.props.update} shelf ='currentlyReading'/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <Shelf filteredBooks = {this.props.books.filter(booktype => booktype.shelf === 'wantToRead') } updateFunc = {this.props.update} shelf ='wantToRead'/>

                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <Shelf filteredBooks = {this.props.books.filter(booktype => booktype.shelf === 'read')} updateFunc = {this.props.update} shelf ='read'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <NavLink to='/search' className="search">
                <button>Add a book</button>
              </NavLink>
            </div>
          </div>
        )}
}

export default BookLibrary;