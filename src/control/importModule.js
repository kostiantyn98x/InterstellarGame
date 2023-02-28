export const importImage = (symbol) => {
  let value = '';
  if(symbol == 'ETH') {
    value = '../../img/png/eth-bg.png';
  } 
}

export class Coin {
  typeArg
  id
  balance

  constructor(typeArg, id, balance) {
      this.typeArg = typeArg
      this.id = id
      this.balance = new Balance(typeArg, balance)
  }
}

export const getMainCoins = (tokenPrice, lpPool) => {
const mainCoinList = ['SUI', 'ETH', 'BTC'];
let mainCoin = [];
mainCoinList.map(item => {

  let price = 0;
  let changeValue = 0;
  let isEarn = 0;
  let tokenName = getTokenName(item);
  let tokenIcon = importImage(item);
  let tokenId = undefined;

  lpPool.map(itemValue => {
    if(itemValue.metadata[0].symbol == item) {
      tokenPrice.map(item => {
        if(item.symbol == itemValue.metadata[0].symbol) {
          price = item.value;
          changeValue = item.changeValue;
          isEarn = item.isEarn;
        }
      })
      tokenId = itemValue.metadata[0].typeArg;
      // price = Number(itemValue.data.balanceB.value) / Number(itemValue.data.balanceA.value);
    }
  })
  let value = {
    symbol: item,
    tokenId: tokenId,
    price: Number(price).toFixed(3),
    tokenName: tokenName,
    tokenIcon: tokenIcon,      
    changeValue: changeValue,
    isEarn: isEarn,
    label: item,
  }
  mainCoin.push(value);
})
return mainCoin;
}
  


export const getSwapPrice = (inPool, outPool, value) => {
  let bigIntAmount = changeBigNumber(value);
  let USDAmount = calcSwapOut(inPool, bigIntAmount, true);
  let SecondTokenAmount = calcSwapOut(outPool, USDAmount, false);
  return changeDecimal8Fix(SecondTokenAmount);
  }