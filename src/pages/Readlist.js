import React, { Component} from 'react';
import Header from '../components/Header';

class Readlist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          books: [],
          isLoaded: false,
        }; 
    }
    componentDidMount() {
        console.log("here")
      fetch('http://localhost:8000/api/readlist')
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
                
                <h3 className='title'>My List</h3>
                <div className='homeList'>
                    <div className='centerwrapper'>
                {books.map(book => (
                    <div className='homeBook' key={book.id}>
                       
                        <a href={`/books/${book.id}`}><p className='bookTitle'>{book.title}</p></a>
                        <p>{book.author}</p>
                        <p>{book.rating}</p>
                        <button className='homeBtn'>-Readlist</button>
                    </div>
                    ))}
                   </div> 
                </div>
           </div>
        )
    }
}
}

export default Readlist;