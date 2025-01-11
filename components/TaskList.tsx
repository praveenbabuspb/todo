import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskItem task={item} />}
      style={{ pointerEvents: 'auto' }} // Update pointerEvents prop
    />
  );
};

export default TaskList;
