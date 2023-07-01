import React from 'react';
import { View, Text, TextInput, StyleSheet,Button } from 'react-native';
import Task from './components/Task';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.head}>Task Tracker</Text>
                <View style={styles.list}>
                    <Task />
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    main: {
        paddingTop: 70,
    },
    head: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    item: {
        backgroundColor: '#fff',
        paddingVertical: 25,
        paddingHorizontal: 15,
        width: 350,
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

export default HomeScreen;