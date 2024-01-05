import { useContext } from 'react';
import { createContext,useState } from 'react';
const TabContext = createContext({});
export default TabContext;
export const TabContextProvider = ({children})=> {
    const [tab,setTab] = useState('home');
    
    return (
        <TabContext.Provider value={{tab,setTab}}>
            {children}
        </TabContext.Provider>
    )

}
export const useTab = () => {
    return useContext(TabContext);
  }