import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.leftSide}>
        <View style={styles.box}></View>
        {/* task name */}
        <Text style={styles.task}>{props.text}</Text>
      </View>
      <View style={styles.small}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        paddingVertical: 25,
        paddingHorizontal: 15,
        width: '100%',
        borderRadius: 10,
        borderColor: '#4aedaf',
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    task: {
        fontSize: 20,
        fontWeight: 500,
        maxWidth: '80%',
    },
    box: {
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#2C8CF4'
    },
    small: {
        width: 18,
        height: 18,
        borderRadius: 5,
        borderColor: '#2C8CF4',
        borderWidth: 1,
    },
  });
  
export default Task;
