import logo from './logo.svg';
import './App.css';
import Matrix from './Components/Matrix';
import { useEffect, useState } from 'react';
import Dijkstra from './algorithms/disktra_noWeight';


const matrixSize = 25;

function App() {

  class Node {
    constructor(row, col, value) {
      this.row = row;
      this.col = col;
      this.value = value;
      this.visited = false;
      this.distance = 0;
      this.style = {
        backgroundColor: 'gray'
      }
    }
  }

  function createPathStyle(node) {
    if (node.prev) {
      node.prev.style = {
        backgroundColor: 'green'
      };
      createPathStyle(node.prev);
    }
  }


  function matrixCreator(m, n, NodeConstructor) {
    return Array.from({ length: m }, (_, i) =>
      Array.from({ length: n }, (_, j) =>
        new NodeConstructor(i, j, 0)
      )
    );
  }

  const [matrix, setMatrix] = useState(matrixCreator(matrixSize, matrixSize, Node));
  const [endNode, setEndNode] = useState()



  const handleClickAlgorithm = (event) => {
    const path = Dijkstra(matrix, matrix[0][0], endNode)
    let newMatrix = [...matrix]
    const lastNodePath = newMatrix[path[path.length - 1].row][path[path.length - 1].col]
    createPathStyle(lastNodePath)
    setMatrix(newMatrix)
  }

  return (
    <div className="App">
      <button onClick={handleClickAlgorithm}>Calcular cámino</button>
      <header className="App-header">
        <Matrix matrix={matrix} setMatrix={setMatrix} setEndNode={setEndNode} />
      </header>
    </div>
  );
}

export default App;
