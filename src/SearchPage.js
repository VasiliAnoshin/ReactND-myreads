import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class SearchPage extends Component
{
    state ={
        books:[]
    }

    handleInputChange = (event) =>{
        if(event.target.value) {
            //console.log(event.target.value)
            // console.log(this.state.books)
            BooksAPI.search(event.target.value).then((newBooks) =>{
                this.setState(() => ({
                books:newBooks
            }))
        })
        }else{
            this.setState({books:[]})
        }
    }

    openMainPage = () => {
        this.props.history.push('/');
    };
    
    render(){
    return(
        <div className="search-books">
            <div className="search-books-bar">
                <button className="close-search" onClick={this.openMainPage}>Close</button>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {this.state.books.map((book) =>(
                    <li key= {book.id}>
                        <Book book ={book} shelf = {book.shelf} updateFunc = {this.props.updateFunc}/>
                    </li>
                ))}
                </ol>
            </div>
        </div>)}
}

export default SearchPage;