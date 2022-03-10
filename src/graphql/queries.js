/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($sub: ID!) {
    getUser(sub: $sub) {
      sub
      username
      email
      profileURI
      bio
      tokens {
        items {
          id
          contentURI
          price
          royalty
          supply
          name
          description
          unlockable
          external
          explicit
          traits
          createdAt
          updatedAt
          userTokensId
          collectionTokensId
        }
        nextToken
      }
      collections {
        items {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $sub: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      sub: $sub
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        sub
        username
        email
        profileURI
        bio
        tokens {
          nextToken
        }
        collections {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        sub
        username
        email
        profileURI
        bio
        tokens {
          nextToken
        }
        collections {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getToken = /* GraphQL */ `
  query GetToken($id: ID!) {
    getToken(id: $id) {
      id
      owner {
        sub
        username
        email
        profileURI
        bio
        tokens {
          nextToken
        }
        collections {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        owner {
          sub
          username
          email
          profileURI
          bio
          createdAt
          updatedAt
        }
        tokens {
          nextToken
        }
        name
        description
        createdAt
        updatedAt
        userCollectionsId
      }
      contentURI
      price
      royalty
      supply
      name
      description
      unlockable
      external
      explicit
      traits
      createdAt
      updatedAt
      userTokensId
      collectionTokensId
    }
  }
`;
export const listTokens = /* GraphQL */ `
  query ListTokens(
    $id: ID
    $filter: ModelTokenFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTokens(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        owner {
          sub
          username
          email
          profileURI
          bio
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
        }
        contentURI
        price
        royalty
        supply
        name
        description
        unlockable
        external
        explicit
        traits
        createdAt
        updatedAt
        userTokensId
        collectionTokensId
      }
      nextToken
    }
  }
`;
export const searchTokens = /* GraphQL */ `
  query SearchTokens(
    $filter: SearchableTokenFilterInput
    $sort: [SearchableTokenSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableTokenAggregationInput]
  ) {
    searchTokens(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        owner {
          sub
          username
          email
          profileURI
          bio
          createdAt
          updatedAt
        }
        collection {
          id
          name
          description
          createdAt
          updatedAt
          userCollectionsId
        }
        contentURI
        price
        royalty
        supply
        name
        description
        unlockable
        external
        explicit
        traits
        createdAt
        updatedAt
        userTokensId
        collectionTokensId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      owner {
        sub
        username
        email
        profileURI
        bio
        tokens {
          nextToken
        }
        collections {
          nextToken
        }
        createdAt
        updatedAt
      }
      tokens {
        items {
          id
          contentURI
          price
          royalty
          supply
          name
          description
          unlockable
          external
          explicit
          traits
          createdAt
          updatedAt
          userTokensId
          collectionTokensId
        }
        nextToken
      }
      name
      description
      createdAt
      updatedAt
      userCollectionsId
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $id: ID
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCollections(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        owner {
          sub
          username
          email
          profileURI
          bio
          createdAt
          updatedAt
        }
        tokens {
          nextToken
        }
        name
        description
        createdAt
        updatedAt
        userCollectionsId
      }
      nextToken
    }
  }
`;
export const searchCollections = /* GraphQL */ `
  query SearchCollections(
    $filter: SearchableCollectionFilterInput
    $sort: [SearchableCollectionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCollectionAggregationInput]
  ) {
    searchCollections(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        owner {
          sub
          username
          email
          profileURI
          bio
          createdAt
          updatedAt
        }
        tokens {
          nextToken
        }
        name
        description
        createdAt
        updatedAt
        userCollectionsId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
