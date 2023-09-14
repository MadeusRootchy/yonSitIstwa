import React,{useState} from "react";



export function useColor(userColor) {
    const [color,setColor] = useState('');

    const changeColor = ( userColor ) => {
        setColor({backgroundColor: userColor})

    }

    return [color,setColor] 
}