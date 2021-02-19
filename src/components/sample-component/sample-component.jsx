import React, {useState, useEffect, Component} from 'react';

 class SampleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      };
    }
  
    componentDidMount() {
      fetch('http://localhost:8000/api/users')
        .then(res => res.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        });
    }
  
    render() {
        <div>random stuff before data</div>
      const { items } = this.state;
      if (this.state.isLoaded === undefined) {
        return <div>Loading ... </div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h3>{item.username}</h3>
                <p>{item.email}</p>
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  export default SampleComponent;