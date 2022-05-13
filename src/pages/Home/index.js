import React, { useState, useEffect } from 'react';
import './index.css';

import Logo from '../../img/logo.png';
import Flame from '../../img/flame.svg';
import Avatar from '../../img/avatar.svg';

import Telegram from '../../img/telegram.svg';
import Medium from '../../img/medium.svg';
import Twitter from '../../img/twitter.svg';

import Airdrop from '../../img/airdrop.png';

import HiddenLines from '../../components/HiddenLine';

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


import { useMediaQuery } from 'react-responsive';


const STREAM_CHAIN_ID = "42161";
const STREAM_CONTRACT_ADDRESS = "0x01d356f2a9c7d72d311ccce2670c956a8af9d9b4";
const buttonClass = "btn btn-primary bg-blue2 m-auto w-50";
    
const Home = (props) => {
    const chainId = Number(STREAM_CHAIN_ID);    
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <div className='p-4'>
            <div className='content'>
                {isMobile && (
                    <div className={`d-flex mobile-label justify-content-center ${isMobile == true ? '': 'ml-50'}`}>
                        <div><p>Home</p></div>
                        <div><p>Faq</p></div>
                        <div><p>DAO</p></div>
                        <div><p>Staking</p></div>
                        <div><p>Airdrop</p></div>
                    </div>
                )}
                <div className='d-flex w-100 justify-content-between'>
                    <div><img src={Logo} className="img-circle logo-border logo" /></div>
                    
                    {!isMobile && (
                        <div className={`d-flex header-label ${isMobile == true ? '': 'ml-50'}`}>
                            <div><p>Home</p></div>
                            <div><p>Faq</p></div>
                            <div><p>DAO</p></div>
                            <div><p>Staking</p></div>
                            <div><p>Airdrop</p></div>
                        </div>
                    )}
                    
                    <div className='d-flex'>
                        {!isMobile && (<div className='btn btn-primary but-custom d-flex justify-content-center mt-1'><img src={Flame} className="mr-2 pt-1" /><span>0 Remeeded</span></div>)}
                        {/* <div className='btn btn-primary but-custom d-flex justify-content-center'><img src={Avatar} className="mr-2 pt-1" /><span>0x00000</span></div> */}
                        
                        <div className=''>
                            {/* <img src={Avatar} className="mr-2 pt-1" /> */}
                            <IfWalletConnected>
                                <WalletDropdown />
                            </IfWalletConnected>
                            <IfWalletNotConnected>
                                <div className='wallet-btn-custom d-flex justify-content-center mt-1'><img src={Avatar} className="mr-2 pt-1" /><span>0x00000</span></div>
                            </IfWalletNotConnected>
                        </div>
                    </div>                    
                </div>
                {isMobile && (<div className='mt-4 btn btn-primary but-custom d-flex justify-content-center'><img src={Flame} className="mr-2 pt-1" /><span>0 Remeeded</span></div>)}

                <div className={`airdrop-box mt-5 mb-5 ${isMobile == true ? 'w-100' : 'w-500'}`}>                   
                    <div className='blur-background'></div>
                    <div className='airdrop-icon pt-3'><img src={Airdrop} className="logo" /></div>
                    <div className='d-flex just py-3'>
                        <div className='w-50 text-left'>
                            <div className='mx-3'><h5>Your total claimed</h5></div>
                            <div className='mx-3'><h6>Sum of all previous claims</h6></div>
                        </div>
                        <div className='w-50 text-left'>
                            <div className='mx-3 text-center'><h5><StreamTotalClaimed /></h5></div>
                        </div>
                    </div>
                    <hr className='blue-hr mx-3'/>
                    <div className='d-flex py-3'>
                        <div className='w-50 text-left mx-3'><h5>Claimable now for you</h5></div>
                        <div className='w-50 text-left mx-3 text-center'><h5><StreamClaimableAmount /></h5></div>
                    </div>

                    <div className='pt-4 pb-5'>
                        <ConnectButton
                            className={buttonClass}
                            label="Connect to claim"

                        >
                            <SwitchChainButton
                                requiredChainId={Number(chainId)}
                                className={buttonClass}
                            >
                                <StreamClaimButton className={buttonClass} />
                            </SwitchChainButton>
                        </ConnectButton>
                    </div>
                    
                    {/* <div className='pt-4 pb-5'><div className='btn btn-primary bg-blue2 m-auto w-50'><span>Connect to claim</span></div></div> */}
                </div>
                <div className='d-flex justify-content-center footer pt-5'>
                    <div><img src={Telegram} /></div>
                    <div><img src={Twitter} /></div>
                    <div><img src={Medium} /></div>
                </div>
            </div>

                
            {/* <div className='hidden-line'>                
                <div className='blur-background'></div>
                <HiddenLines />
            </div> */}
        </div>
    )
}

export default Home;
