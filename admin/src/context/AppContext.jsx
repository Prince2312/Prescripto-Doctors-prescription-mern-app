import { createContext } from "react";

export const AppContext = createContext()

const AppContectProvider = (props) =>{
   
    const value = {

    }

    return (
        <AppContect.Provider value={value}>
            {props.children}
        </AppContect.Provider>
    )
}

export default AppContectProvider