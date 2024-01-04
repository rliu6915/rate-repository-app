import { Pressable } from "react-native";
import RepositoryItem from "../RepositoryItem";
import { useNavigate } from "react-router-native";

const PressRepoItem = ({ item }) => {
  const navigate = useNavigate();

  const onPress = () => {
    console.log("Pressed")
    navigate(`/repository/${item.id}`)
  }
  return (
    <Pressable onPress={onPress}>
      <RepositoryItem props={item}/>
    </Pressable>
  );
}

export default PressRepoItem;