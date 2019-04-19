import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const GetRepositoryInfoQuery = gql`
  query GetRepositoryIssues($name: String!, $login: String!) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        stargazers {
          totalCount
        }
        watchers {
          totalCount
        }
      }
    }
  }
`;