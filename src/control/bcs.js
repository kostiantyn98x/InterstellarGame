import { BCS, getSuiMoveConfig } from '@mysten/bcs'
import { CONFIG } from '../lib/config'

export const bcs = new BCS(getSuiMoveConfig())

bcs.registerStructType(`${CONFIG.tradeifyPackageId}::pool::PoolCreationEvent`, { pool_id: 'address' })



export async function getTradeDatas(provider, address) {
    const tradingID = [];
    tradingID.push(CONFIG.tradingPoolID);
    const traderBatch = await provider.getObjectBatch(tradingID);
  
    const traderData = traderBatch[0].details.data.fields.data.fields.contents;
    // // get Referral Code
    let ownData = [];
    traderData.map(item => {
      if(item.fields.key.fields.trader == address) {
        ownData.push(item.fields.key.fields);
      }
    })
    return ownData;
  }