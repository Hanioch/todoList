import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";
import { taskListGlobal } from "./Utils/globalVariable";

export default function App() {
  const [list, setList] = useState(taskListGlobal);
  const [id, setId] = useState(3);
  useEffect(() => {
    console.log("ici", list);
  }, [list]);

  return (
    <View style={styles.container}>
      <TodoList list={list} setList={setList} stateId={{ id, setId }} />
      <Text>
        ---------------------------------------------------------------------------
      </Text>
      <AddTask
        list={list}
        setList={setList}
        setId={() => setId(id + 1)}
        id={id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
});
