import { useEffect, useState } from 'react';
import Big from 'big.js';

export const useBalance = (account) => {
    const [balance, setBalance] = useState('0.00');
  
    
    useEffect(() => {
      getBalance();
    }, [account]);
  
    return {
      balance
    }
}