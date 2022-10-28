import React, { useState } from "react";
import {SafeAreaView, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { StyleSheet } from "react-native";
import Task from "./components/Task/Task";

function App() {
  const [counter, setCounter] = useState(0);
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setCounter(counter + 1);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)

  }
  
  const completeTask = (index) => {
    setCounter(counter - 1);
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  
  

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.text_container}>
          <Text style={styles.text}>YAPILACAKLAR :</Text>
        </View>
        <View style={styles.counter_container}>
          <Text style={styles.text}>{counter}</Text>
        </View>
      </View>

      <View style={styles.task_wrapper}>

        <View style={styles.items}>
          {
            taskItems.map((item,index) => {
              return(
                <TouchableOpacity 
                key={index} 
                onLongPress={() => completeTask(index)}>
                  <Task text = {item}></Task>
                </TouchableOpacity>
              ) 
            })
          }

        </View>

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder="Görev ekleyin..." value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>



    </SafeAreaView>

  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    margin: 10,
    marginTop: 15,
    marginBottom: 20
  },

  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFA500',
  },
  task_wrapper: {
    margin: 10
  },
  sectionTitle: {

  },
  items: {

  },
  writeTaskWrapper: {
    position : 'absolute',
    bottom : 20,
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-between', 
    alignItems : 'center',
    padding : 5

  },

  input: {
    paddingVertical : 15,
    paddingHorizontal : 15,
    borderWidth : 1,
    borderColor : '#C0C0C0',
    backgroundColor : '#FFF',
    borderRadius : 15,
    width : '80%'
  },

  addWrapper: {
    width : 65,
    height : 65,
    backgroundColor : '#FFF',
    borderRadius : 50,
    borderWidth : 1,
    justifyContent: 'center',
    alignItems  : 'center'
  },

  addText: {
    fontSize : 50,
    fontWeight : 'bold'
  },


})