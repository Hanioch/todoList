import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import List from "../List";
// import check from "../../assets/check.jpg";

const TicketTask = ({ info, listFunctions, list }) => {
  const { isCompleted, content, id } = info;
  const { setIsCompleted, removeTask, setTask, addTask } = listFunctions;
  const [isSelect, setIsSelect] = useState(false);
  const [newTaskContent, setNewTaskcontent] = useState(content);
  const [isAddingSubTask, setIsAddingSubTask] = useState(false);
  const [subTaskValue, setSubTaskValue] = useState("");

  const check = require("../../assets/check.png");
  const remove = require("../../assets/x.png");
  const edit = require("../../assets/edit.png");
  const plus = isAddingSubTask
    ? require("../../assets/minus.png")
    : require("../../assets/plus.png");

  const editTask = () => {
    if (isSelect) {
      setTask(id, newTaskContent);
    }
    setIsSelect(!isSelect);
  };

  const addSubTask = () => {
    if (!subTaskValue) {
      return;
    }
    const data = {
      idParent: id,
      content: subTaskValue,
      isCompleted: isCompleted,
    };
    addTask(data);
    setIsAddingSubTask(false);
    setSubTaskValue("");
  };

  const childTask = list.filter((task) => task.idParent === id);
  return (
    <>
      <View style={styles.container}>
        {isSelect ? (
          <TextInput
            style={styles.input}
            value={newTaskContent}
            onChangeText={setNewTaskcontent}
            multiline
          />
        ) : (
          <Text style={styles.taskText}>{content}</Text>
        )}
        <View style={styles.allAction}>
          <TouchableOpacity
            onPress={() => removeTask(id)}
            style={styles.containerImage}
          >
            <Image style={styles.image} source={remove} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={editTask}
            style={isSelect ? styles.containerDone : styles.containerImage}
          >
            {isSelect ? (
              <Text>OK</Text>
            ) : (
              <Image style={styles.image} source={edit} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsCompleted(id)}
            style={
              info.isCompleted ? styles.containerImage : styles.containerDone
            }
          >
            {isCompleted ? (
              <Image style={styles.image} source={check} />
            ) : (
              <Text>Done</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsAddingSubTask(!isAddingSubTask)}
            style={styles.containerImage}
          >
            <Image style={styles.image} source={plus} />
          </TouchableOpacity>
        </View>
      </View>

      {isAddingSubTask && (
        <View>
          <TextInput
            style={{ ...styles.input, ...styles.inputSubTask }}
            value={subTaskValue}
            onChangeText={setSubTaskValue}
            multiline
          />

          <TouchableOpacity onPress={addSubTask}>
            <Text>ajouter une sous taches</Text>
          </TouchableOpacity>
        </View>
      )}

      {childTask.length > 0 && (
        <View style={styles.child}>
          <List
            Children={TicketTask}
            list={list}
            listFunctions={listFunctions}
            filterList={childTask}
          />
        </View>
      )}

      <Text>-------------------------------------------</Text>
    </>
  );
};

export default TicketTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerImage: { width: 15, height: 15 },
  image: { flex: 1, width: null, height: null, resizeMode: "contain" },
  input: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    width: 200,
  },
  allAction: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    width: 80,
    justifyContent: "space-around",
  },
  taskText: {
    width: 250,
  },
  inputSubTask: {
    marginLeft: 20,
  },
  child: {
    marginLeft: 5,
  },
});
