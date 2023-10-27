import { createContext, useContext, useState } from "react";



const ThemeContext = createContext()

export function ThemeProvider ({children}){
    const [darkTheme, setDarkTheme] = useState('#333')

        

    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 

export function useTheme () {
    return useContext(ThemeContext)
}