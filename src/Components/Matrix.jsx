
import React, { useState } from 'react';
import '../themes/Matrix.css'
import Node from './Node.jsx'
export default function Matrix({ matrix, setMatrix, setEndNode }) {

  return (
    <div className="grid" >
      {matrix.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <Node key={`${rowIndex}-${cellIndex}`} rowIndex={rowIndex + 1} cellIndex={cellIndex + 1} matrix={matrix} setMatrix={setMatrix} setEndNode={setEndNode}>
          </Node>
        ))
      )}
    </div>
  );
}