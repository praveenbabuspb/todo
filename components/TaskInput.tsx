import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

interface TaskInputProps {
  addTask: (taskName: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        label="New Task"
        value={taskName}
        onChangeText={setTaskName}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTask}>
        Add Task
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
});

export default TaskInput;
