import React from 'react'
// import './bookmarkApp.css'
import BookmarkList from '../bookmarkList/BookmarkList'
import Fab from '../fab/fab'

class BookmarkApp extends React.Component {
    render() {
        return(
            <div classname = 'bookmarkApp'>
                <h2>Bookmarks</h2>
                <BookmarkList bookmarks=
                {this.props.bookmarks}/>
                <Fab />
            </div>
        )
    }
}

export default BookmarkApp