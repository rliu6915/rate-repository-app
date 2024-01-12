// import { useState, useEffect } from 'react';

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);

//     // Replace the IP address part with your own IP address!
//     const response = await fetch('http://10.68.118.153:5001/api/repositories');
//     const json = await response.json();

//     setLoading(false);
//     setRepositories(json);
//   };

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// };

// export default useRepositories;

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword, first) => {
  const {loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
      searchKeyword: searchKeyword,
      first: first
    }
  })
  // console.log("data.repositories.edges",data.repositories.edges)

  const handleFetchMore = () => {
    // console.log("data", data.repositories.pageInfo)
    const hasNextPage = data.repositories.pageInfo ? data.repositories.pageInfo.hasNextPage : false
    const moreItemToFetch = !loading && hasNextPage

    if (!moreItemToFetch) {
      return
    }

    fetchMore({
      variables: {
        after: data?.repositories.pageInfo.endCursor,
        orderBy: orderBy,
        orderDirection: orderDirection,
        searchKeyword: searchKeyword,
        first: first
      }
    })
  }

  return {
    repositories: data ? data.repositories : null,
    loading, 
    error, 
    fetchMore: handleFetchMore,
  }
}

export default useRepositories