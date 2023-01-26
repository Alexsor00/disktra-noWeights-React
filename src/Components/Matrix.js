
import React, { useState } from 'react';
import '../themes/Matrix.css'
import Node from './Node.js'
export default function Matrix({matrix, setMatrix, setEndNode}) {

    return (
        <div className="grid" >
          {matrix.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
                <Node rowIndex={rowIndex+1} cellIndex={cellIndex+1} value={cell} style={{gridRow: `${rowIndex+1}`, gridColumn: `${cellIndex+1}`}} key={`${rowIndex}-${cellIndex}`  } matrix={matrix} setMatrix={setMatrix} setEndNode={setEndNode}>
                    </Node>
            )) 
          )}
        </div>
      );
}