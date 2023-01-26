import logo from './logo.svg';
import './App.css';
import Matrix from './Components/Matrix';
import { useEffect, useState } from 'react';
import Dijkstra from './algorithms/disktra_noWeight';




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
  const matrix_creation = matrixCreator(25, 25);


  for (let i = 0; i < matrix_creation.length; i++) {
    for (let j = 0; j < matrix_creation[i].length; j++) {
      matrix_creation[i][j] = new Node(i, j, 0);
    }
  }

  const [matrix, setMatrix] = useState(matrix_creation)
  const [endNode, setEndNode] = useState()

  function updateStyle(node) {
    if (node.prev) {
      node.prev.style = {
        backgroundColor: 'green'
      };
      updateStyle(node.prev);
    }
  }


  function matrixCreator(m, n) {
    return Array.from({
      // generate array of length m
      length: m
      // inside map function generate array of size n
      // and fill it with `0`
    }, () => new Array(n).fill(0));
  };

  const handleClickAlgorithm = (event) => {
    console.log(matrix)
    console.log(endNode)
    console.log(matrix[23][24])
    console.log(endNode)
    const path = Dijkstra(matrix, matrix[0][0], endNode)
    console.log(path)

    let newMatrix = [...matrix]


    const lastNodePath = newMatrix[path[path.length - 1].row][path[path.length - 1].col]
    updateStyle(lastNodePath)

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
