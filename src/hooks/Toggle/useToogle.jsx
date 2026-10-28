import { useState } from "react"

export const useToggle = (key,colorValue)=>{

    let [theme,setTheme] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : colorValue)

    function updatedTheme(value) {
        setTheme(value)
        localStorage.setItem(key , JSON.stringify(value))

    }

    return [theme,updatedTheme]
}