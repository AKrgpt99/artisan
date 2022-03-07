import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NFTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CollectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IncentiveMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email?: string;
  readonly bio?: string;
  readonly nfts?: (NFT | null)[];
  readonly collections?: (Collection | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class NFT {
  readonly id: string;
  readonly contentURI: string;
  readonly owner?: User;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly royalty: number;
  readonly collection?: Collection;
  readonly incentives?: (Incentive | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NFT, NFTMetaData>);
  static copyOf(source: NFT, mutator: (draft: MutableModel<NFT, NFTMetaData>) => MutableModel<NFT, NFTMetaData> | void): NFT;
}

export declare class Collection {
  readonly id: string;
  readonly owner?: User;
  readonly name: string;
  readonly description: string;
  readonly coverURI: string;
  readonly bannerURI: string;
  readonly nfts?: (NFT | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Collection, CollectionMetaData>);
  static copyOf(source: Collection, mutator: (draft: MutableModel<Collection, CollectionMetaData>) => MutableModel<Collection, CollectionMetaData> | void): Collection;
}

export declare class Incentive {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly contentURI?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Incentive, IncentiveMetaData>);
  static copyOf(source: Incentive, mutator: (draft: MutableModel<Incentive, IncentiveMetaData>) => MutableModel<Incentive, IncentiveMetaData> | void): Incentive;
}