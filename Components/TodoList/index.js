import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TicketTask from "../TicketTask";
import List from "../List";
import { addNewTaskGlobal } from "../../Utils/globalFunctions";

const TodoList = ({ list, setList, stateId }) => {
  const setTask = (id, content) => {
    let newList = [];
    list.forEach((task) => {
      let newTask = task;
      if (id === task.id) {
        newTask = { ...task, content };
      }
      newList.push(newTask);
    });
    console.log("on regarde", id);
    setList(newList);
  };

  const setIsCompleted = (id) => {
    let newList = [];
    list.forEach((task) => {
      let newTask = task;
      if (id === task.id) {
        newTask = { ...task, isCompleted: !task.isCompleted };
      }
      newList.push(newTask);
    });
    setList(newList);
  };

  const removeTask = (id) => {
    let newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  const addTask = (data) => {
    const newData = { id: stateId.id, ...data };
    addNewTaskGlobal(newData, setList, list);
    stateId.setId(stateId.id + 1);
  };

  // const principalTask = list.filter((task) => !task.idParent);
  // console.log("yes", principalTask);

  return (
    <View>
      <List
        list={list}
        Children={TicketTask}
        listFunctions={{ setIsCompleted, removeTask, setTask, addTask }}
        stateId={stateId}
      />
      {/* <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});
