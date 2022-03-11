/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($sub: String) {
    onCreateUser(sub: $sub) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($sub: String) {
    onUpdateUser(sub: $sub) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($sub: String) {
    onDeleteUser(sub: $sub) {
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
export const onCreateToken = /* GraphQL */ `
  subscription OnCreateToken($creator: String) {
    onCreateToken(creator: $creator) {
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
export const onUpdateToken = /* GraphQL */ `
  subscription OnUpdateToken($creator: String) {
    onUpdateToken(creator: $creator) {
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
export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken($creator: String) {
    onDeleteToken(creator: $creator) {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection($creator: String) {
    onCreateCollection(creator: $creator) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection($creator: String) {
    onUpdateCollection(creator: $creator) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection($creator: String) {
    onDeleteCollection(creator: $creator) {
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
export const onCreateTokenOwners = /* GraphQL */ `
  subscription OnCreateTokenOwners($sub: String, $creator: String) {
    onCreateTokenOwners(sub: $sub, creator: $creator) {
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
export const onUpdateTokenOwners = /* GraphQL */ `
  subscription OnUpdateTokenOwners($sub: String, $creator: String) {
    onUpdateTokenOwners(sub: $sub, creator: $creator) {
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
export const onDeleteTokenOwners = /* GraphQL */ `
  subscription OnDeleteTokenOwners($sub: String, $creator: String) {
    onDeleteTokenOwners(sub: $sub, creator: $creator) {
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
export const onCreateUserTokenLikes = /* GraphQL */ `
  subscription OnCreateUserTokenLikes($sub: String, $creator: String) {
    onCreateUserTokenLikes(sub: $sub, creator: $creator) {
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
export const onUpdateUserTokenLikes = /* GraphQL */ `
  subscription OnUpdateUserTokenLikes($sub: String, $creator: String) {
    onUpdateUserTokenLikes(sub: $sub, creator: $creator) {
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
export const onDeleteUserTokenLikes = /* GraphQL */ `
  subscription OnDeleteUserTokenLikes($sub: String, $creator: String) {
    onDeleteUserTokenLikes(sub: $sub, creator: $creator) {
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
export const onCreateUserCollectionLikes = /* GraphQL */ `
  subscription OnCreateUserCollectionLikes($sub: String, $creator: String) {
    onCreateUserCollectionLikes(sub: $sub, creator: $creator) {
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
export const onUpdateUserCollectionLikes = /* GraphQL */ `
  subscription OnUpdateUserCollectionLikes($sub: String, $creator: String) {
    onUpdateUserCollectionLikes(sub: $sub, creator: $creator) {
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
export const onDeleteUserCollectionLikes = /* GraphQL */ `
  subscription OnDeleteUserCollectionLikes($sub: String, $creator: String) {
    onDeleteUserCollectionLikes(sub: $sub, creator: $creator) {
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
