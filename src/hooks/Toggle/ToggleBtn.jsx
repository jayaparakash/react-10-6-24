import { useToggle } from "./useToogle"

export const Toggle = ()=>{

    let [theme,updatedTheme] = useToggle('theme','light')

    return(
        <>  

        <div className="container-fluid" style={{height:'100vh'}}>

        <div className={`${theme == 'light' ? 'bg-dark' : 'bg-light'} h-100`}>
        <button className="btn btn-primary"
            onClick={()=>updatedTheme(theme == 'light' ? 'dark' : 'light')}
        >

            {theme == 'light' ? 'switch to lightMode' : 'switch to Drakmode'}


        </button>

        </div>


        </div>


        </>
    )
}