import { useEffect, useState } from 'react'
import '../themes/Matrix.css'



export default function Node({rowIndex, cellIndex, matrix, setMatrix, setEndNode}) {
     

    const[value, setValue] = useState(0)
    
    const[style, setStyle] = useState({backgroundColor: 'gray'})

    useEffect(() => {
          if(rowIndex === 1 && cellIndex === 1) {
            const newMatrix = [...matrix];
          newMatrix[rowIndex - 1][cellIndex - 1].style = { ...style, backgroundColor: 'green' };
          setMatrix(newMatrix);
          }
           
      }, []);

    if(rowIndex === 0 && cellIndex === 0){
        setStyle({...style, backgroundColor: 'blue'})
        setValue(1)
    }
    const handleClick = (event) => {
        let newMatrix = [...matrix]
        if (event.shiftKey) {
            newMatrix[rowIndex - 1][cellIndex - 1].style = { ...style, backgroundColor: 'yellow' };
            setEndNode(newMatrix[rowIndex - 1][cellIndex - 1])

        } else      {
            newMatrix[rowIndex-1][cellIndex-1].value = 1
            newMatrix[rowIndex - 1][cellIndex - 1].style = { ...style, backgroundColor: 'red' };
        }  


            


        setMatrix(newMatrix)
    }

       return (
       <div className='element' style = {matrix[rowIndex - 1][cellIndex -1].style} onClick={handleClick}> </div>
      );
      
}