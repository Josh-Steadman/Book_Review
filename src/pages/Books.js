import React, { Component} from 'react';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import './pages.css'


 class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        books: [],
        isLoaded: false,
      };
    }
  
    componentDidMount() {
        console.log("here")
      fetch('http://localhost:8000/api/books')
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            books: result
          });
        });
    }
  
    render() {
        
      const { books } = this.state;
      if (this.state.isLoaded === undefined) {
        return <div>Loading ... </div>;
      } else {
        return (
            <div>
                <Header></Header>
                <ul>
                    {books.map(book => (
                    <li className='bookList' key={book.id}>
                       
                        <a href={`/books/${book.id}`}><h3>{book.title}</h3></a>
                        <p>{book.author}</p>
                    </li>
                    ))}
                </ul>
          </div>
        );
      }
    }
  }
  export default Books;