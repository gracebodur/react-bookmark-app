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

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     bookmarks: [],
  //     showAddForm: false
  //   }
  // }

  // componentDidMount() {
  //   const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks'
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       "Authorization": "Bearer $2a$10$ZhdeJefcb.5sx/DCmO/n8u5sJLcARAdbHw9tfm1mevGRq3s1.5DpW",
  //       "Content-Type": "application/json"
  //     }
  //   }

  //   fetch(url, options)
  //   .then(res => {
  //     if(!res.ok) {
  //       throw new Error('Something went wrong, please try again later')
  //     }
  //     return res
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       bookmarks: data,
  //       error: null
  //     })
  //   })
  //   .catch(err => {
  //     this.setState({
  //       error: err.message
  //     })
  //   })
  // }

  render() {
    // const page = this.state.showAddForm
        // ? <AddBookmark />
        // : <BookmarkApp bookmarks=
        // {this.state.bookmarks} />
    return (
      <div className="App">
        <AddBookmark />
        <BookmarkApp bookmarks={bookmarks}/>
        {/* {page} */}
      </div>
    );
  }
}

export default App;
