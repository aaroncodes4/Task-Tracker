import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./screen/components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.head}>Task Tracker</Text>
        <View style={styles.list}>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.bottom}>
        <TextInput
          placeholder="Type here..."
          textContentType="name"
          style={styles.input}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.round}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  main: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  head: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  bottom: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    bottom: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  input: {
    padding: 10,
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 30,
    borderColor: "#2C8CF4",
    borderWidth: 1,
  },
  round: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2C8CF4",
    borderWidth: 1,
  },
});
