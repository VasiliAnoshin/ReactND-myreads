import React, { Component } from 'react'

class Shelf extends Component
{
    handleChange= book =>(event) =>{
        //console.log(event.target.value)
        //console.log(book)
        // alert(event.target.value)
        this.props.updateFunc(book, event.target.value)
      }
    render(){
        return(
            <ol className="books-grid">
            {this.props.filteredBooks.map((book) =>(
                <li key= {book.id}>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                              <select  value={this.props.shelf} onChange={this.handleChange(book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            ))}
            </ol>
        )
    }
}

export default Shelf;