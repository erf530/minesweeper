import React from 'react';
import GridCell from './GridCell';

const GridRow = ({
  rowIndex, row, mine, mineCoords,
}) => (
  <tr key={rowIndex}>

    {
        row.map((cellIndex) => {
          const absDistanceFromMine = mineCoords ? [Math.abs(mineCoords[0] - rowIndex), Math.abs(mineCoords[1] - cellIndex)] : null;
          const closeToMine = mineCoords ? absDistanceFromMine[0] <= 1 && absDistanceFromMine[1] <= 1 : null;
          console.log('mine coords', mineCoords);
          console.log('absdistance', absDistanceFromMine);
          console.log('close', closeToMine);

          return (
            mine && mine[1] === cellIndex
              ? <GridCell rowIndex={rowIndex} cellIndex={cellIndex} key={cellIndex} mine={mine} />
              : <GridCell rowIndex={rowIndex} cellIndex={cellIndex} key={cellIndex} mineCoords={mineCoords} closetoMine={closeToMine} />
          );
        })
      }
  </tr>
);

export default GridRow;
