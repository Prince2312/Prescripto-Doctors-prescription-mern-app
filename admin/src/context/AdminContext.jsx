import { createContext } from "react";

export const AdminContext = createContext()

const AdminContectProvider = (props) =>{
   
    const value = {

    }

    return (
        <AdminContect.Provider value={value}>
            {props.children}
        </AdminContect.Provider>
    )
}

export default AdminContectProvider