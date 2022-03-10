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
export const createToken = /* GraphQL */ `
  mutation CreateToken(
    $input: CreateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    createToken(input: $input, condition: $condition) {
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
export const updateToken = /* GraphQL */ `
  mutation UpdateToken(
    $input: UpdateTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    updateToken(input: $input, condition: $condition) {
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
export const deleteToken = /* GraphQL */ `
  mutation DeleteToken(
    $input: DeleteTokenInput!
    $condition: ModelTokenConditionInput
  ) {
    deleteToken(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
