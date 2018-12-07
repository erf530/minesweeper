

import React, { Component } from 'react';

export default class GridCell extends Component {
  constructor(props) {
    super(props);
    const { closeToMine } = this.props;

    this.state = {
      toggleBoom: false,
      toggleOpen: false,
      // to do: use this state to reveal cells close to mine when clicked
      toggleCloseToMine: closeToMine,

    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.mine
      ? this.setState({ toggleBoom: true })
      : this.setState({ toggleOpen: true });
  }

  render() {
    const { mineCoords, cellIndex, rowIndex } = this.props;
    if (!mineCoords) return null;

    const { toggleBoom, toggleOpen } = this.state;

    return (

      <td
        key={this.props.cellIndex}
        onClick={this.handleClick}
      >
        {toggleBoom
          ? '!!!'
          : toggleOpen
            ? 'o'
            : 'x'
          }
      </td>
    );
  }
}
