import React, { Component } from 'react';
import Header from '../components/Header'
import './pages.css'

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          books: [],
          isLoaded: false,
        }; 
        
    }


   

    componentDidMount() {
        console.log("here")
      fetch('http://localhost:8000/api/books/top')
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
        return(
            <div>
                <Header></Header>
                <h2>Book Reviews</h2>
                <h3 className='title'>Top picks</h3>
                <div className='homeList'>
                    <div className='centerwrapper'>
                {books.map(book => (
                    <div className='homeBook' key={book.id}>
                       
                        <a href={`/books/${book.id}`}><p className='bookTitle'>{book.title}</p></a>
                        <p>{book.author}</p>
                        <p>{book.rating}</p>
                        <form method="POST" action='/readlist'>
                          <input name='title' value={book.title} type='hidden'></input>  
                        <button name='readlist' className='homeBtn'>+Readlist</button>
                        </form>
                    </div>
                    ))}
                   </div> 
                </div>
           </div>
        )
    }
}
}

export default Home;