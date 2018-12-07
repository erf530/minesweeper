/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line react/no-array-index-key
import React, { Component } from 'react';
import GridRow from './GridRow';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      mine: [],
    };
  }

  componentDidMount() {
    // to do: make func to place multiple mines through out, outside of the lifecycle component
    const xIndex = Math.floor(Math.random() * 10 + 1);
    const yIndex = Math.floor(Math.random() * 10 + 1);

    this.setState({
      mine: [xIndex, yIndex],
    });
  }

  render() {
    // to do: make func that creates grid based on input size (level of difficulty)
    const easy = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ];

    const { mine } = this.state;

    return (
      <table>
        <tbody>
          { easy.map((row, rowIndex) => {
            console.log('rowIndex', rowIndex);
            console.log('mine', mine);
            console.log('test', rowIndex === mine[0]);
            return (
              rowIndex === mine[0]
                ? <GridRow row={row} key={rowIndex} rowIndex={rowIndex} mine={mine} />
                : <GridRow row={row} key={rowIndex} rowIndex={rowIndex} mineCoords={mine} />
            );
          })
          }
        </tbody>
      </table>

    );
  }
}


export default Grid;
