import { View, Text } from 'react-native';

const RepositoryItem = ({props}) => (
  <View>
    <Text>Full name: {props.fullName}</Text>
    <Text>Description: {props.description}</Text>
    <Text>Language: {props.language}</Text>
    <Text>Number of forks: {props.forksCount}</Text>
    <Text>Number of stars: {props.stargazersCount}</Text>
    <Text>Number of ratings: {props.ratingAverage}</Text>
    <Text>Number of reviews: {props.reviewCount}</Text>
  </View>
);

export default RepositoryItem;