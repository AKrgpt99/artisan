// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, NFT, Collection, Incentive } = initSchema(schema);

export {
  User,
  NFT,
  Collection,
  Incentive
};