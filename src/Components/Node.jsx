import { useEffect, useState } from 'react'
import '../themes/Matrix.css'


function setNodeStyle(rowIndex, cellIndex, matrix, style) {
    matrix[rowIndex - 1][cellIndex - 1].style = ({ backgroundColor: style })
}

function setNodeValue(rowIndex, cellIndex, matrix, value) {
    matrix[rowIndex - 1][cellIndex - 1].value = value;
}

export default function Node({ rowIndex, cellIndex, matrix, setMatrix, setEndNode }) {

    useEffect(() => {
        if (rowIndex === 1 && cellIndex === 1) {
            const newMatrix = [...matrix];
            setNodeStyle(rowIndex, cellIndex, newMatrix, 'green')
            setMatrix(newMatrix);
        }
    }, []);


    const handleClick = (event) => {
        let newMatrix = [...matrix]
        if (event.shiftKey) {
            setNodeStyle(rowIndex, cellIndex, newMatrix, 'yellow')
            setEndNode(newMatrix[rowIndex - 1][cellIndex - 1])
        } else {
            setNodeValue(rowIndex, cellIndex, newMatrix, 1)
            setNodeStyle(rowIndex, cellIndex, newMatrix, 'red')
        }
        setMatrix(newMatrix)
    }

    return (
        <div className='element' style={matrix[rowIndex - 1][cellIndex - 1].style} onClick={handleClick}> </div>
    );

}