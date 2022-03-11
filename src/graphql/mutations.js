/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createToken = /* GraphQL */ `
  mutation CreateToken(
    $input: CreateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    createToken(input: $input, condition: $condition) {
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
export const updateToken = /* GraphQL */ `
  mutation UpdateToken(
    $input: UpdateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    updateToken(input: $input, condition: $condition) {
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
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken(
    $input: DeleteTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    deleteToken(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createTokenOwners = /* GraphQL */ `
  mutation CreateTokenOwners(
    $input: CreateTokenOwnersInput!
    $condition: ModelTokenOwnersConditionInput
  ) {
    createTokenOwners(input: $input, condition: $condition) {
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
export const updateTokenOwners = /* GraphQL */ `
  mutation UpdateTokenOwners(
    $input: UpdateTokenOwnersInput!
    $condition: ModelTokenOwnersConditionInput
  ) {
    updateTokenOwners(input: $input, condition: $condition) {
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
export const deleteTokenOwners = /* GraphQL */ `
  mutation DeleteTokenOwners(
    $input: DeleteTokenOwnersInput!
    $condition: ModelTokenOwnersConditionInput
  ) {
    deleteTokenOwners(input: $input, condition: $condition) {
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
export const createUserTokenLikes = /* GraphQL */ `
  mutation CreateUserTokenLikes(
    $input: CreateUserTokenLikesInput!
    $condition: ModelUserTokenLikesConditionInput
  ) {
    createUserTokenLikes(input: $input, condition: $condition) {
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
export const updateUserTokenLikes = /* GraphQL */ `
  mutation UpdateUserTokenLikes(
    $input: UpdateUserTokenLikesInput!
    $condition: ModelUserTokenLikesConditionInput
  ) {
    updateUserTokenLikes(input: $input, condition: $condition) {
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
export const deleteUserTokenLikes = /* GraphQL */ `
  mutation DeleteUserTokenLikes(
    $input: DeleteUserTokenLikesInput!
    $condition: ModelUserTokenLikesConditionInput
  ) {
    deleteUserTokenLikes(input: $input, condition: $condition) {
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
export const createUserCollectionLikes = /* GraphQL */ `
  mutation CreateUserCollectionLikes(
    $input: CreateUserCollectionLikesInput!
    $condition: ModelUserCollectionLikesConditionInput
  ) {
    createUserCollectionLikes(input: $input, condition: $condition) {
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
export const updateUserCollectionLikes = /* GraphQL */ `
  mutation UpdateUserCollectionLikes(
    $input: UpdateUserCollectionLikesInput!
    $condition: ModelUserCollectionLikesConditionInput
  ) {
    updateUserCollectionLikes(input: $input, condition: $condition) {
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
export const deleteUserCollectionLikes = /* GraphQL */ `
  mutation DeleteUserCollectionLikes(
    $input: DeleteUserCollectionLikesInput!
    $condition: ModelUserCollectionLikesConditionInput
  ) {
    deleteUserCollectionLikes(input: $input, condition: $condition) {
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
