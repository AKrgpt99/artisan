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
      ownedTokens {
        items {
          id
          userID
          tokenID
          createdAt
          updatedAt
          sub
          creator
        }
        nextToken
      }
      createdTokens {
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
          views
          createdAt
          updatedAt
          userCreatedTokensId
          collectionTokensId
        }
        nextToken
      }
      likedTokens {
        items {
          id
          userID
          tokenID
          createdAt
          updatedAt
          sub
          creator
        }
        nextToken
      }
      createdCollections {
        items {
          id
          logoURI
          featuredURI
          bannerURI
          name
          slug
          description
          category
          externals
          royalty
          paymentTokens
          explicit
          views
          createdAt
          updatedAt
          userCreatedCollectionsId
        }
        nextToken
      }
      likedCollections {
        items {
          id
          userID
          collectionID
          createdAt
          updatedAt
          sub
          creator
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
        ownedTokens {
          nextToken
        }
        createdTokens {
          nextToken
        }
        likedTokens {
          nextToken
        }
        createdCollections {
          nextToken
        }
        likedCollections {
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
        ownedTokens {
          nextToken
        }
        createdTokens {
          nextToken
        }
        likedTokens {
          nextToken
        }
        createdCollections {
          nextToken
        }
        likedCollections {
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
      owners {
        items {
          id
          userID
          tokenID
          createdAt
          updatedAt
          sub
          creator
        }
        nextToken
      }
      creator {
        sub
        username
        email
        profileURI
        bio
        ownedTokens {
          nextToken
        }
        createdTokens {
          nextToken
        }
        likedTokens {
          nextToken
        }
        createdCollections {
          nextToken
        }
        likedCollections {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        creator {
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
        logoURI
        featuredURI
        bannerURI
        name
        slug
        description
        category
        externals
        royalty
        paymentTokens
        explicit
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedCollectionsId
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
      views
      likes {
        items {
          id
          userID
          tokenID
          createdAt
          updatedAt
          sub
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
      userCreatedTokensId
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
        owners {
          nextToken
        }
        creator {
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
          logoURI
          featuredURI
          bannerURI
          name
          slug
          description
          category
          externals
          royalty
          paymentTokens
          explicit
          views
          createdAt
          updatedAt
          userCreatedCollectionsId
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
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedTokensId
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
        owners {
          nextToken
        }
        creator {
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
          logoURI
          featuredURI
          bannerURI
          name
          slug
          description
          category
          externals
          royalty
          paymentTokens
          explicit
          views
          createdAt
          updatedAt
          userCreatedCollectionsId
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
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedTokensId
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
      creator {
        sub
        username
        email
        profileURI
        bio
        ownedTokens {
          nextToken
        }
        createdTokens {
          nextToken
        }
        likedTokens {
          nextToken
        }
        createdCollections {
          nextToken
        }
        likedCollections {
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
          views
          createdAt
          updatedAt
          userCreatedTokensId
          collectionTokensId
        }
        nextToken
      }
      logoURI
      featuredURI
      bannerURI
      name
      slug
      description
      category
      externals
      royalty
      paymentTokens
      explicit
      views
      likes {
        items {
          id
          userID
          collectionID
          createdAt
          updatedAt
          sub
          creator
        }
        nextToken
      }
      createdAt
      updatedAt
      userCreatedCollectionsId
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
        creator {
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
        logoURI
        featuredURI
        bannerURI
        name
        slug
        description
        category
        externals
        royalty
        paymentTokens
        explicit
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedCollectionsId
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
        creator {
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
        logoURI
        featuredURI
        bannerURI
        name
        slug
        description
        category
        externals
        royalty
        paymentTokens
        explicit
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedCollectionsId
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
export const getTokenOwners = /* GraphQL */ `
  query GetTokenOwners($id: ID!) {
    getTokenOwners(id: $id) {
      id
      userID
      tokenID
      user {
        sub
        username
        email
        profileURI
        bio
        ownedTokens {
          nextToken
        }
        createdTokens {
          nextToken
        }
        likedTokens {
          nextToken
        }
        createdCollections {
          nextToken
        }
        likedCollections {
          nextToken
        }
        createdAt
        updatedAt
      }
      token {
        id
        owners {
          nextToken
        }
        creator {
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
          logoURI
          featuredURI
          bannerURI
          name
          slug
          description
          category
          externals
          royalty
          paymentTokens
          explicit
          views
          createdAt
          updatedAt
          userCreatedCollectionsId
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
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedTokensId
        collectionTokensId
      }
      createdAt
      updatedAt
      sub
      creator
    }
  }
`;
export const listTokenOwners = /* GraphQL */ `
  query ListTokenOwners(
    $filter: ModelTokenOwnersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTokenOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        tokenID
        user {
          sub
          username
          email
          profileURI
          bio
          createdAt
          updatedAt
        }
        token {
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
          views
          createdAt
          updatedAt
          userCreatedTokensId
          collectionTokensId
        }
        createdAt
        updatedAt
        sub
        creator
      }
      nextToken
    }
  }
`;
export const getUserTokenLikes = /* GraphQL */ `
  query GetUserTokenLikes($id: ID!) {
    getUserTokenLikes(id: $id) {
      id
      userID
      tokenID
      user {
        sub
        username
        email
        profileURI
        bio
        ownedTokens {
          nextToken
        }
        createdTokens {
          nextToken
        }
        likedTokens {
          nextToken
        }
        createdCollections {
          nextToken
        }
        likedCollections {
          nextToken
        }
        createdAt
        updatedAt
      }
      token {
        id
        owners {
          nextToken
        }
        creator {
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
          logoURI
          featuredURI
          bannerURI
          name
          slug
          description
          category
          externals
          royalty
          paymentTokens
          explicit
          views
          createdAt
          updatedAt
          userCreatedCollectionsId
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
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedTokensId
        collectionTokensId
      }
      createdAt
      updatedAt
      sub
      creator
    }
  }
`;
export const listUserTokenLikes = /* GraphQL */ `
  query ListUserTokenLikes(
    $filter: ModelUserTokenLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTokenLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        tokenID
        user {
          sub
          username
          email
          profileURI
          bio
          createdAt
          updatedAt
        }
        token {
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
          views
          createdAt
          updatedAt
          userCreatedTokensId
          collectionTokensId
        }
        createdAt
        updatedAt
        sub
        creator
      }
      nextToken
    }
  }
`;
export const getUserCollectionLikes = /* GraphQL */ `
  query GetUserCollectionLikes($id: ID!) {
    getUserCollectionLikes(id: $id) {
      id
      userID
      collectionID
      user {
        sub
        username
        email
        profileURI
        bio
        ownedTokens {
          nextToken
        }
        createdTokens {
          nextToken
        }
        likedTokens {
          nextToken
        }
        createdCollections {
          nextToken
        }
        likedCollections {
          nextToken
        }
        createdAt
        updatedAt
      }
      collection {
        id
        creator {
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
        logoURI
        featuredURI
        bannerURI
        name
        slug
        description
        category
        externals
        royalty
        paymentTokens
        explicit
        views
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userCreatedCollectionsId
      }
      createdAt
      updatedAt
      sub
      creator
    }
  }
`;
export const listUserCollectionLikes = /* GraphQL */ `
  query ListUserCollectionLikes(
    $filter: ModelUserCollectionLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCollectionLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        collectionID
        user {
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
          logoURI
          featuredURI
          bannerURI
          name
          slug
          description
          category
          externals
          royalty
          paymentTokens
          explicit
          views
          createdAt
          updatedAt
          userCreatedCollectionsId
        }
        createdAt
        updatedAt
        sub
        creator
      }
      nextToken
    }
  }
`;
