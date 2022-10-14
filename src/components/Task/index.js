import React from "react";
import {
  useColorScheme,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";


import * as S from "./styles";


const Task = (props) => {
  const colorScheme = useColorScheme();
  const isLight = colorScheme === "light";


  return (
    <S.Item>
      <S.Circle></S.Circle>
      <S.ItemText>{props.text}</S.ItemText>
      <Image
        source={require('../../../assets/lixeira.jpg')}
        style={styles.ImageIconStyle}
      />

    </S.Item>
  );
};

const styles = StyleSheet.create({
  ImageIconStyle: {
    height: 20,
    width: 20,
    margin: '1%',
    marginLeft: '89%',
    resizeMode: 'stretch',
    backgroundColor: "gray",
    position: 'absolute',
  },
})


export default Task;
