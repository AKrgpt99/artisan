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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
