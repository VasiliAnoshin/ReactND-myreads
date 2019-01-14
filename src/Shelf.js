import React, { Component } from 'react'
import Book from './Book.js'

class Shelf extends Component
{
    render(){
        return(
            <ol className="books-grid">
                {this.props.filteredBooks.map((book) =>(
                    <li key= {book.id}>
                        <Book book ={book} shelf = {this.props.shelf} updateFunc = {this.props.updateFunc}/>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Shelf;