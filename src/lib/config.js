
export const CONFIG = {       
    rpcUrl: 'https://fullnode.devnet.vincagame.com:443/',
    suiUrl: 'https://fullnode.devnet.sui.io:443/',
    // link: 'http://localhost:3000/',
    link: 'https://tradeify.app/',

    // tokenomics
    eth_id: '0xebccab84155eead8e94e9f35f0cd9ab634b9351b',
    eth: '0xc859f1c022ad9e31fe24cb040dbbe8f1d8efe5a4::eth::ETH',

    btc_id: '0x7916e5f3fe51d2c6751b7650098e7c2906f126d0',
    btc: '0x7f94eebe9c5cd346fc921c3daf60490313a70b9a::btc::BTC',

    try_id: '0x0736c3753c7dc8dc31391dc42f2fb23bf2d236c3',
    try: '0x83057ac01219da3b8e8c526336e7b57adeb0546::try::TRY',  

    tlp: '0xff3db17c31ad40c43d118103a29e384fc096903d::tlp::TLP',

    // mint, buy/sell, swap package
    tradeifyPackageId: '0xff3db17c31ad40c43d118103a29e384fc096903d',
    poolRegistryId: '0x3a1d7de517d83cb23c8cc5db5e0e5440fbd7745c',
    TLPStorageId: '0xa3c2c8a397cbf286c2f31ee32876dc3f0b63b7ba',

    // staking package
    stakingPackageId: '0xff3db17c31ad40c43d118103a29e384fc096903d',
    stakingPoolId: '0x0780c719e21cdf6849cace679ecfdc29afb0278f',

    // referral package
    referralPackageId: '0xff3db17c31ad40c43d118103a29e384fc096903d',
    referRegistryId: '0x5bbc69d18ca94d47e031634be44274705fcb2a15',
    refTraderRegistryId: '0x96b21602d763a5041088f7f6a6218441c1758d37',
    referralStaus: '0xba47f3c1316f4f8564574129dd5d7d0f45ef7c4a',

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