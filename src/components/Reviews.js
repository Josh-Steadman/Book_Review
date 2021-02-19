import React, { Component} from 'react';


 class Reviews extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reviews: [],
        isLoaded: false,
      };
     
    }
  
    componentDidMount() {
        let id = this.props.book_id
      fetch(`http://localhost:8000/api/reviews/${id}`)
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            reviews: result
          });
        });
    }
  
    render() {
        
      const { reviews } = this.state;
      if (this.state.isLoaded === undefined) {
        return <div>Loading ... </div>;
      } else {
        return (
            <div>
                
                
                {reviews.map(review => <div>{review.description}</div>
                )}
             
          </div>
        );
      }
    }
  }
  export default Reviews;