import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  TouchableOpacity,
  Keyboard,
  ScrollView,
  useColorScheme,
  StyleSheet,
  CheckBox,
  Modal,
  Pressable,
  Image,
  Text,
} from "react-native";

import Task from "../../components/Task";


import * as S from "./styles";
import { View } from "react-native-web";


export default function Home() {
  // const colorScheme = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  const isLight = colorScheme === "light";

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);




  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const checkValueInput = () => {
    if (task == null) {
      alert('Por favor preencha os campo(s).');
    } else {
      setTaskItems([...taskItems, task]);
      setTask(null);
      return;
    }
  }

  return (
    <S.Container>
      <StatusBar
        hidden={false}
        // backgroundColor={(props) => props.theme.primaryBackground}
        barStyle={isLight ? "light-content" : "dark-content"}
        translucent
      />


      <S.Header>
        <Image
          source={require('../../../assets/Logo.png')}
          style={styles.ImageIconStyle}
        />
      </S.Header>
      {/* Write a task */}
      <S.WriteTaskWrapper
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <S.Input
          placeholder={"Clique aqui para adcionar uma nova tarefa"}
          placeholderTextColor='white'
          value={task}
          onChangeText={(text) => setTask(text)}

        />

        <TouchableOpacity onPress={() => checkValueInput()}>
          <S.AddWrapper style={styles.button}>
            <S.AddText>+</S.AddText>
          </S.AddWrapper>
        </TouchableOpacity>
        <TouchableOpacity >



        </TouchableOpacity>
      </S.WriteTaskWrapper>

      <S.TasksWrapper>
        <S.Items>
          <ScrollView>


            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity

                  key={index}
                  onPress={() => completeTask(index)}
                >


                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </S.Items>
      </S.TasksWrapper>

    </S.Container >


  );
}

const styles = StyleSheet.create({
  ImageIconStyle: {
    height: '20%',
    width: '30%',
    lineHeight: 32,
    padding: 16,
    margin: '10%',
    resizeMode: 'stretch',
  },
  button: {
    backgroundColor: '#1E6F9F'
  },
})

