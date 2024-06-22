import {createContext, useState} from 'react' 

export const ProductContext = createContext(null)

export function PostContext ({children}) {
    const [postDetails, setPostDetails] = useState()

    return (
        <ProductContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </ProductContext.Provider>
    )
}