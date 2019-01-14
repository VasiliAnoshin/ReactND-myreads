import React, { Component } from 'react'

class UpdateStatusBtn extends Component{
    handleChange= book =>(event) =>{
        //console.log(event.target.value)
        //console.log(book)
        // alert(event.target.value)
        this.props.updateFunc(book, event.target.value)
      }
      
    render(){
        return(
            <div className="book-shelf-changer">
            <select  value={this.props.shelf} onChange={this.handleChange(this.props.book)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
        )
    }
}

export default UpdateStatusBtn;