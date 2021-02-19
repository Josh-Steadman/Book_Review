import React, { Component} from 'react';
import Header from '../components/Header';

 class Books extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        books: [],
        isLoaded: false,
      };
    }
  
    componentDidMount() {
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
                    <li key={book.id} href={`/books/${book.id}`}>
                        <h3>{book.title}</h3>
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