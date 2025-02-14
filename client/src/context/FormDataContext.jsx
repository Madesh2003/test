import { createContext, useState } from "react";

const FormDataContext = createContext()

// eslint-disable-next-line react/prop-types
const UserDataProvider = ({children}) => {
    const [name, setName] = useState('')
    return (
        <FormDataContext.Provider value={{name, setName}}>
            {children}
        </FormDataContext.Provider>
    )
}

export {FormDataContext, UserDataProvider}