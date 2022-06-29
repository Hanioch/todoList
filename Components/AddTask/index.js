import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { addNewTaskGlobal } from "../../Utils/globalFunctions";

const AddTask = ({ list, setList, setId, id }) => {
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    // if (!newTask) {
    //   return;
    // }

    // const newList = [...list, { id: id, content: newTask, isCompleted: false }];
    // setNewTask("");
    // setList(newList);
    // setId();
    const data = { id: id, content: newTask, isCompleted: false };
    const res = addNewTaskGlobal(data, setList, list);
    if (res === "success") {
      setNewTask("");
      setId();
    }
  };

  return (
    <View>
      <Text>AddTask</Text>
      <TextInput
        style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          width: 300,
        }}
        value={newTask}
        onChangeText={setNewTask}
        multiline
      />
      <TouchableOpacity onPress={addNewTask}>
        <Text>Ajouter une tache</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({});
