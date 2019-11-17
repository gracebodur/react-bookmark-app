import React from 'react';
import './App.css';
import AddBookmark from './addBookmark/AddBookmark'

const bookmarks = [
{
  title: 'Google',
  url: 'http://www.google.com',
  rating: '3',
  description: 'No evil'
},
{
  title: 'Google',
  url: 'http://www.google.com',
  rating: '3',
  description: 'No evil'
}
]


class App extends React.Component {
  render() {
    return (
      <div className="App">
       <AddBookmark />
      </div>
    );
  }
}

export default App;
