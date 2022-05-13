import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import "@fontsource/ibm-plex-sans";
import './App.css';
import './css/tailwind.output.css';
import './css/fontawesome-free-6.0.0-beta3-web/css/fontawesome.css';

import Home from './pages/Home';
import {
  ConnectButton,
  StreamClaimableAmount,
  StreamClaimButton,
  StreamClaimingProvider,
  StreamRateByTokens,
  StreamEmissionTimeUnit,
  StreamTotalClaimed,
  SwitchChainButton,
  WalletDropdown,
  StreamClaimingStatusBar,
  IfWalletConnected,
  StreamProvider,
  IfWalletNotConnected,
} from "flair-sdk";

const STREAM_CHAIN_ID = "42161";
const STREAM_CONTRACT_ADDRESS = "0x01d356f2a9c7d72d311ccce2670c956a8af9d9b4";

function App() {

  const chainId = Number(STREAM_CHAIN_ID);
  const contractAddress = STREAM_CONTRACT_ADDRESS;
  return (
    
    <StreamProvider
      contractAddress={contractAddress}
      chainId={Number(chainId)}
    >
      
      <StreamClaimingProvider>
        <React.Fragment>  
            <Routes>    
              <Route path="/" element={<Home />} />             
            </Routes>   
        </React.Fragment>
        </StreamClaimingProvider>  
    </StreamProvider>
  );
}

export default App;
