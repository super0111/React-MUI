import { useState, createContext } from 'react';

const Context = createContext();

const AppProvider = ({children}) => {

const [ campaigns, setCampaigns ] = useState([]);

  return (
    <Context.Provider 
      value={{
        campaigns, setCampaigns,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { AppProvider, Context };