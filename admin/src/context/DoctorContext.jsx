import { createContext } from "react";

export const DoctorContext = createContext()

const DoctorContectProvider = (props) =>{
   
    const value = {

    }

    return (
        <DoctorContect.Provider value={value}>
            {props.children}
        </DoctorContect.Provider>
    )
}

export default DoctorContectProvider