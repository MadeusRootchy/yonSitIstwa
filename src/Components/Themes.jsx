import { useState } from "react"
import { useTheme } from "./ThemeContext"

export function Themes() {
    const {darkTheme ,setDarkTheme} = useTheme()

    const tab = [
        '#ffffff', '#8c978c', '#F73F52', '#FF9000', '#FBD400', '#9ED763', '#6730EC','#815A8F',
        '#663399', '#FF69B4', '#00CED1', '#FF1493', '#00FF00', '#0000FF', '#FFFF00',
        '#8B4513'
    ]
    
    const [currentColor, setCurrentColor] = useState('#ffffff')

    return (
        <div className="themes">
        {
                tab.map((el) => (
                <span 
                className="theme"
                onClick={()=>setDarkTheme(el)}
                style={{backgroundColor: el}}>{el}</span>
                ))
        }

        </div>

    
    )
}