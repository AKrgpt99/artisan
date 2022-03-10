/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateToken = /* GraphQL */ `
  subscription OnCreateToken {
    onCreateToken {
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
export const onUpdateToken = /* GraphQL */ `
  subscription OnUpdateToken {
    onUpdateToken {
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
export const onDeleteToken = /* GraphQL */ `
  subscription OnDeleteToken {
    onDeleteToken {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
