
import React, { Component} from 'react';
import Header from '../components/Header';


 class SearchBooks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        books: [],
        isLoaded: false,
        bookName: ''
      };
    }
  
    componentDidMount() {
        console.log(this.props.location.search.split('=')[1])
        let search = this.props.location.search.split('=')[1] 
        if(search.includes('+')) {
            search = search.replace('+', ' ')
        }
        if (search === '') {
            fetch('http://localhost:8000/api/books')
            .then(res => res.json())
            .then(result => {
              this.setState({
                isLoaded: true,
                books: result
              });
            });
        }
      fetch(`http://localhost:8000/book/${search}`)
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
                    <li key={book.id}>
                        
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
  export default SearchBooks;