
export const CONFIG = {       
    rpcUrl: 'https://fullnode.devnet.vincagame.com:443/',
    suiUrl: 'https://fullnode.devnet.sui.io:443/',
    // link: 'http://localhost:3000/',
    link: 'https://tradeify.app/',

    // trading package
    tradingPoolID: '0xefa3180c74b886f87b3ad7c1c801c59b7ce825cd',

    nullAddress: '0x0000000000000000000000000000000000000000',

    eth_binance_api: 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT',
    bnb_binance_api: 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT',

    // Main default setting parameter
    MainDecimal: 9,
    defaultSlippagePct: 1,
    tradingFee: 1, // this is % value
    TLPPrice: 1, // this is % value
    TRYPrice: 1,
    faucetDurationTime: 10 * 60 * 1000, // 1 hour
    timeIntervalOfPrice: 300,    
    timeIntervalOfReward: 300,    
    referCodeLength: 100000000000,
    TLPDecimal: 100000
}