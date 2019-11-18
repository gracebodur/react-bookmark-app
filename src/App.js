import React from 'react';
import './App.css';

import AddBookmark from './addBookmark/AddBookmark'
import BookmarkApp from './bookmarkApp/BookmarkApp'

const bookmarks = [
  {
    title:"Google",
    url:"http://www.google.com", 
    rating:"3", 
    description:"No evil"
    },
    {
      title:"Google",
      url:"http://www.google.com", 
      rating:"3", 
      description:"No evil"
    }
  ]

class App extends React.Component {

    //1. show either the bookmarkApp or 
    //the addForm component started with 
    //constructor this.state then pass it down to the Bookmark component
  constructor(props) {
    super(props)
    this.state = {
      bookmarks: [],
      showAddForm: false
    }
  }

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks'
    const options = {
      method: 'GET',
      headers: {
        //add key after bearer
        "Authorization": "Bearer $2a$10$w8uTcVCIeb8xJIrcP0XuWOTNMaBspXScWml3KCOU6jB9cjahUtT.a",
        "Content-Type": "application/json"
      }
    }
  fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('something went wrong, try again later')
      }
      return res
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        bookmarks: data,
        error: null
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })
  }

  render() {

    // 3. add a conditional display, 
    //if the showAddForm is true then display the AddBookmark component, 
    //otherwise display the BookmarkApp component.
    const page = this.state.showAddForm
        ? <AddBookmark />
        : <BookmarkApp bookmarks=
        {this.state.bookmarks} />
    return (
      <div className="App">
        {/* <AddBookmark /> 4. clear the componenst 
        here pass the variable page to be displayed */}
        {/* 2. added the state to bookmarkapp using this.state  */}
        {/* <BookmarkApp bookmarks={this.state.bookmarksbookmarks}/>  */}
        {page}
      </div>
    );
  }
}

export default App;
