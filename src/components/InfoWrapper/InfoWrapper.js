import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import GetRepositoryInfoQuery from './GetRepositoryInfoQuery'

export const withInfo = graphql(GetRepositoryInfoQuery, {

    options: ({ login = "facebook", name = "react" }) => {
        return {
            variables: {
                login,
                name
            }
        }
    },
    
    props: ({ data }) => {
        // loading state
        if (data.loading) {
            return { loading: true };
        }

        // error state
        if (data.error) {
            console.error(data.error);
        }

        // OK state
        return { data };
    },
});