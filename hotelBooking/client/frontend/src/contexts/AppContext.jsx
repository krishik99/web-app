import { createContext,useContext,useState } from "react";
import Toastr from "../utilities/Toastr";
import { useQuery } from "react-query";
import * as API from '../api/services.js';
export const AppContext = createContext(null);
export default AppContext;

export const toastConfig = {
    message:String='',
    type:String=''
}

export const AppContextProvider = ({children})=> {
    const [showToast,setShowToast] = useState(toastConfig);
    const [cookie,setCookie] = useState(false);
    const [userName,setUserName] = useState('');
    const {isError} = useQuery("validateToken",API.validateToken,{
        retry:false,
        staleTime:Infinity,
        onSuccess: (response) => {
           if(response && response.user && response.user._id){
               setCookie(true)
               setUserName(response.user.firstName);
           }
        }
    });

    return(
        <AppContext.Provider value={{showToast,setShowToast,isLoggedIn:cookie,setCookie,userName}}>
            {showToast.message && showToast.type && <Toastr message={showToast.message} type={showToast.type}/>}
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=> {
    return useContext(AppContext)
}