import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import { NavLink } from 'react-router-dom'

class SearchPage extends Component
{
    state ={
        books:[]
    }

    handleInputChange = (event) =>{
        if(event.target.value) {
            //console.log(event.target.value)
            BooksAPI.search(event.target.value).then((newBooks) =>{
                if(!newBooks.error){
                    this.setState(() => ({
                        books:newBooks
                }))}else{
                    this.setState(() => ({
                        books:[]
                }))}
        })
        }else {
            this.setState({books:[]})
        }
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <NavLink to='/' className="search">
                        <button className="close-search">Close</button>
                    </NavLink>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.books.map((book) =>(
                        <li key= {book.id}>
                            <Book book ={book} shelf = {book.shelf} updateFunc = {this.props.update}/>
                        </li>
                    ))}
                    </ol>
                </div>
            </div>)
            }
}

export default SearchPage;