import React, { Component } from 'react';
import Grid from './Grid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      difficulty: 'easy',
    };
  }

  render() {
    const { difficulty } = this.state;
    return (
      <div>
        <h1>wingsweeper</h1>
        <p>
          {`level:${difficulty}`}
        </p>
        <Grid difficulty={difficulty} />
      </div>
    );
  }
}

export default App;
