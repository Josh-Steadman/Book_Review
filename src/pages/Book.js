import React, { Component} from 'react';
import Header from '../components/Header';

 class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        book: [],
        isLoaded: false,
      };
    }
  
    componentDidMount() {
      fetch('http://localhost:8000/api/books/2')
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            book: result
          });
        });
    }
  
    render() {
        
      const { book } = this.state;
      if (this.state.isLoaded === undefined) {
        return <div>Loading ... </div>;
      } else {
        return (
            <div>
                <Header></Header>
                {book.map(b => <div>{b.title}</div>)}
        
          </div>
        );
      }
    }
  }
  export default Book;