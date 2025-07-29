import {createContext, useState} from 'react';

export const ReceiptContext = createContext([]);

export const ReceiptProvider = ({children}) => {
  const [receipts, setReceipts] = useState([]);
  return (
    <ReceiptContext.Provider value={{receipts, setReceipts}}>
      {children}
    </ReceiptContext.Provider>
  );
};
