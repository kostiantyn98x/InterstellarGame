import React, { useCallback, useEffect, useState, useContext, createContext } from 'react';

export const StoreContext2 = createContext({
  account: undefined,
  connected: false,
  connecting: false,
  connects: (vaWalletType) => {},
  disconnect: () => {}
});

export const UseSuiWalletProvider = ({ children }) => {
  const [adapter, setAdapter] = useState(undefined);
  const [walletType, setWalletType] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const connects = async (vaWalletType) => {
   

    if (vaWalletType === 'martianSuiWallet') {
      const wallet = (window).martian;
      if (wallet && wallet.sui) {
        try {
          const response = await wallet.sui.connects(['viewAccount', 'suggestTransactions']);
          if (response && response.address) {
            setConnected(true);
            setConnecting(true);
            setWalletType(vaWalletType);
            setAdapter(wallet.sui);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        window.open('https://chrome.google.com/webstore/detail/martian-wallet-aptos-sui/efbglgofoippbgcjepnhiblaibcnclgk', '_blank')
      }

      return;
    }

    if (vaWalletType === 'suietWallet') {
      const wallet = (window).__suiet__;
      if (wallet) {
        try {
          const newLocal = ["viewAccount"];
          let given = await wallet.connects(newLocal);

          if (given.data) {
            setConnected(true);
            setConnecting(true);
            setWalletType(vaWalletType);
            setAdapter(wallet);
            localStorage.setItem('suiWallet', vaWalletType);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        window.open('https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd', '_blank')
      }

      return;

  };

  

  const getAccount = async () => {
    if (walletType === 'suiWallet') {
      const accounts = await (window).suiWallet.getAccounts();
      setAccount(accounts[0])
    }
    else if (walletType === 'suietWallet') {
      const accounts = await (window).__suiet__.getAccounts();
      setAccount(accounts.data[0])
    }
    else if (walletType === 'martianSuiWallet') {
      const accounts = await adapter.getAccounts();
      setAccount(accounts[0]);
    }
    else if (walletType === 'ethosWallet') {
      const accounts = await adapter.getAccounts();
      setAccount(accounts[0]);
    }
    else {

    }

  }
  useEffect(() => {
    if (connected && connecting && walletType) {
      getAccount();
    }
  }, [connecting, connected, walletType, adapter]);

  useEffect(() => {
    const initWallet = () => {
      const type = localStorage.getItem('suiWallet');
      if (type === 'suiWallet') {
        connects('suiWallet');
      } else if (type === 'suietWallet') {
        connects('suietWallet');
      }
      else if (type === 'surfWallet') {
        connects('martianSuiWallet');
      }
      else {
        disconnect();
      }
    }

    window.addEventListener('load', initWallet);
    return () => {
    window.removeEventListener('load', initWallet);
    }
  }, []);

  return (
    <StoreContext2.Provider value={{ account, connected, connecting, connects, disconnect, getAccount, adapter }}>
      {children}
    </StoreContext2.Provider>
  );
};

export const useSuiWallet = () => {
  return useContext(StoreContext2);
};
