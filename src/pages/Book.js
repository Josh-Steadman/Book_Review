import React, { Component} from 'react';
import Header from '../components/Header';
import Reviews from '../components/Reviews'

 class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        book: [],
        isLoaded: false,
        bookId: 0
      };
     
    }
  
    componentDidMount() {
        let id = this.props.match.params.id
      fetch(`http://localhost:8000/api/books/${id}`)
        .then(res => res.json())
        .then(result => { 
          this.setState({
            isLoaded: true,
            book: result,
            bookId: id
          });
        });
    }
  
    render() {
        
      const { book } = this.state;
      let bookId = this.state.bookId
      console.log(bookId)
      if (this.state.isLoaded === undefined) {
        return <div>Loading ... </div>;
      } else {
        return (
            
            <div>
                <Header></Header>
        
        {book.map(b => <div>{b.title}</div> 
                )}
               {book.map(b => <Reviews book_id={b.id}></Reviews>)}
          </div>
        );
      }
    }
  }
  export default Book;