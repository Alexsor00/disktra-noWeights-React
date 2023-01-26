import { PriorityQueue } from "../helpers/priorityQueue";
function getNeighbors(matrix, node) {
  let neighbors = [];
  let row = node.row;
  let col = node.col;
  // check top
  if (row > 0 && matrix[row - 1][col].value === 0) {
    neighbors.push(matrix[row - 1][col]);
  }
  // check right
  if (col < matrix[row].length - 1 && matrix[row][col + 1].value === 0) {
    neighbors.push(matrix[row][col + 1]);
  }
  // check bottom
  if (row < matrix[row].length - 1 && matrix[row + 1][col].value === 0) {
    neighbors.push(matrix[row + 1][col]);
  }
  // check left
  if (col > 0 && matrix[row][col - 1].value === 0) {
    neighbors.push(matrix[row][col - 1]);
  }
  return neighbors;
}


export default function Dijkstra(matrix, startNode, endNode) {
  // create a priority queue and add the starting node
  let queue = new PriorityQueue();
  queue.add(startNode, 0);
  let visited = []

  // set the starting node as visited

  //create a path array
  let path = []
  for (var i = 0; i < matrix.length; ++i) {
    for (var j = 0; j < matrix[i].length; ++j) {
      matrix[i][j].distance = Infinity
    }
  }
  startNode.distance = 0;
  // loop until the queue is not empty
  while (!queue.isEmpty()) {

    // get the node with the lowest distance from the queue
    let currentNode = queue.poll();
    if (visited.includes(currentNode)) {

      continue;
    }

    visited.push(currentNode)
    // check if we have reached the end node
    if (currentNode === endNode) {
      return getPath(endNode);
    }
    // get the neighbors of the current node
    let neighbors = getNeighbors(matrix, currentNode);
    // loop through the neighbors
    for (let neighbor of neighbors) {
      // calculate the distance of the neighbor
      let distance = currentNode.distance + 1;
      // check if the distance is lower than the current distance and update it
      if (distance < neighbor.distance) {
        neighbor.distance = distance;
        neighbor.prev = currentNode;
        queue.add(neighbor, distance);
        path.push(currentNode);
      }
    }
  }

  return false; // path not found
}


function getPath(endNode) {
  let path = [];
  let currentNode = endNode;
  while (currentNode) {
    path.unshift(currentNode);
    currentNode = currentNode.prev;
  }
  return path;
}