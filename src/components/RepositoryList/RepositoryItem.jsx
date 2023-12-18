import { View } from 'react-native';

import ProfileHeader from '../RepositoryItem/ProfileHeader'
import ProfileStats from '../RepositoryItem/ProfileStats'

const RepositoryItem = ({props}) => (
  <View>
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
  </View>
);

export default RepositoryItem;