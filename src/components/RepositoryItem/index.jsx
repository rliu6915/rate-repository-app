import { View, StyleSheet} from 'react-native';

import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})

const RepositoryItem = ({props}) => (
  <View testID='repositoryItem' style={styles.container}>
    <ProfileHeader 
      source={props.ownerAvatarUrl} 
      fullName={props.fullName}
      description={props.description}
      language={props.language}
    />
    <ProfileStats
      forksCount={props.forksCount}
      stargazersCount={props.stargazersCount}
      ratingAverage={props.ratingAverage}
      reviewCount={props.reviewCount}
    />
    <Button />
  </View>
);

export default RepositoryItem;